using Models;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OAuthLoginExercise.Controllers
{
    [Authorize]
    public class RecordsController : ApiController
    {
        RecordsRepository _rep = new RecordsRepository();
        // GET: api/Records
        public IEnumerable<Record> Get()
        {
            return _rep.GetAll();
        }

        // GET: api/Records/5
        public Record Get(string id)
        {
            if (id != null)
            {
                Record record = _rep.Get(id);
                return record;
            }
            return null;
        }

        // POST: api/Records
        public void Post(Record record)
        {
            _rep.Post(record);
        }

        // PUT: api/Records/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Records/5
        public void Delete(int id)
        {
        }
    }
}
