using Microsoft.AspNetCore.Mvc;
using Client.Base;
using Client.Repositories.Data;
using Client.Models;
using Client.ViewModels;
using System.Security.Claims;
using System.Text;
using System.Security.Cryptography.X509Certificates;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.VisualBasic.Syntax;

namespace Client.Controllers;

public class AccountController : BaseController<Account,AccountRepository, int>
{
    private readonly AccountRepository _accountRepository;

    public AccountController(AccountRepository repository) : base(repository)
    {
        this._accountRepository = repository;
    }

    public IActionResult Index()
    {
        return View();
    }  
    public IActionResult Create()
    {
        return View();
    }
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(Account account)
    {
        var result = await _accountRepository.Post(account);
        if (result.StatusCode==200)
        {
            RedirectToAction("Index", "Home");
        }
        return View();
    }

    //Login 
    [HttpGet]
    public async Task<IActionResult> Login()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Login(LoginVM loginVM)
    {
        var result = await _accountRepository.Login(loginVM);
        if (result is null)
        {
            return RedirectToAction("Error", "Home");
        }
        else if(result.StatusCode == 409)
        {
            ModelState.AddModelError(string.Empty, result.Message);
            return View();
        }
        else if (result.StatusCode == 200)
        {
            HttpContext.Session.SetString("jwtoken", result.Data);
            return RedirectToAction("Index", "Home");
        }
        return View();
    }

}
