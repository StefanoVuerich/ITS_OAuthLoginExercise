using Models;
using RecordsDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class RecordsRepository
    {
        public IEnumerable<Record> GetAll()
        {
            List<Record> records = new List<Record>();
            foreach (Record record in MyDB._db)
            {
                records.Add(record);
            }
            return records;
        }

        public Record Get(string id)
        {
            return MyDB._db.Where(xx => xx.ID == id).FirstOrDefault();
        }

        public void Post(Record record)
        {
            MyDB._db.Add(record);
        }
    }
}
