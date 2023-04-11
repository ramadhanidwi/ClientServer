using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    public class ClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
