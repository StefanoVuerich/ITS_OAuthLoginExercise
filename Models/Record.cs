using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Record
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public Record(string id, string name, string description, string price)
        {
            this.ID = id;
            this.Name = name;
            this.Description = description;
            this.Price = price;
        }
    }
}
