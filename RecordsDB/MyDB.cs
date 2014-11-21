using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecordsDB
{
    public class MyDB
    {
        public static List<Record> _db = new List<Record>();
        public MyDB()
        {
            _db.Add(new Record("1", "Primo Record", "Desc primo", "50€"));
            _db.Add(new Record("2", "Secondo Record", "Desc secondo", "55€"));
            _db.Add(new Record("3", "Terzo Record", "Desc terzo", "60€"));
        }
    }
}
