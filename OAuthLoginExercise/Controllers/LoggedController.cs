using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OAuthLoginExercise.Controllers
{
    public class LoggedController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}
