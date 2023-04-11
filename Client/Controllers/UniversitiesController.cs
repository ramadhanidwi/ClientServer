using Client.Base;
using Client.Models;
using Client.Repositories.Data;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;

namespace Client.Controllers;

public class UniversitiesController : BaseController<University, UniversityRepository, int>
{
    private readonly UniversityRepository repository;

    public UniversitiesController(UniversityRepository repository) : base(repository)
    {
        this.repository = repository;
    }

    ////Http GET 
    //public IActionResult Index()
    //{
    //    return View();
    //}

    //public IActionResult Create()
    //{
    //    return View();
    //}

    ////Http POST 
    //[HttpPost]
    //[ValidateAntiForgeryToken]
    //public async Task<IActionResult> Create(University university)
    //{
    //    var result = await repository.Post(university);
    //    if (result.Status == 200)
    //    {
    //        RedirectToAction("Index", "Home");
    //    }
    //    else
    //    {
    //        RedirectToAction("Error", "Home");
    //    }
    //    return View();
    //}

    //Controller Ka Nathan 
    //GET
    [HttpGet]
    public async Task<IActionResult> Index()    //Kenapa Gapake HTTP GET? 
    {
        var result = await repository.Get();
        var universities = new List<University>();

        if (result.Data != null)
        {
            universities = result.Data.ToList();
        }

        return View(universities);
    }

    //ini untuk tampilan Create (GET)
    [HttpGet]
    public async Task<IActionResult> Create()
    {
        return View();
    }

    //Details
    [HttpGet]
    public async Task<IActionResult> Details(int id)
    {
        var result = await repository.Get(id);
        var detail = new University();
        if (result.Data != null)
        {
            detail.Id = result.Data.Id;
            detail.Name = result.Data.Name;
        }

        return View(detail);
    }

    //[HttpGet]
    //public async Task<IActionResult> Remove()
    //{
    //    return View();
    //}
    //Edit 
    [HttpGet]
    public async Task<IActionResult> Edit()
    {
        return View();
    }

    //POST

    //Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(University university)
    {
        if (ModelState.IsValid)
        {
            var result = await repository.Post(university);
            if (result.StatusCode == 200)
            {
                TempData["Success"] = "Data berhasil masuk";
                return RedirectToAction(nameof(Index));
            }
            else if (result.StatusCode == 409)
            {
                ModelState.AddModelError(string.Empty, result.Message);
                return View();
            }
        }
        return View();
    }
    //Delete
    [HttpGet]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await repository.Get(id);
        return View(result.Data);
    }
    //Delete
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Remove(int id)
    {
        if (ModelState.IsValid)
        {
            var result = await repository.Delete(id);
            if (result.StatusCode == 200)
            {
                TempData["Success"] = "Data berhasil dihapus";
                return RedirectToAction(nameof(Index));
            }
            else if (result.StatusCode == 409)
            {
                ModelState.AddModelError(string.Empty, result.Message);
                return View();
            }
        }
        return View();
    }

    //Edit
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(University university)
    {
        if (ModelState.IsValid)
        {
            var result = await repository.Put(university, university.Id);
            if (result.StatusCode == 200)
            {
                TempData["Success"] = "Data berhasil dihapus";
                return RedirectToAction(nameof(Index));
            }
            else if (result.StatusCode == 409)
            {
                ModelState.AddModelError(string.Empty, result.Message);
                return View();
            }
        }
        return View();
    }



}
