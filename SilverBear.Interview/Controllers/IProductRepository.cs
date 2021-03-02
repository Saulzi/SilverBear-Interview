using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SilverBear.Interview.Controllers
{
    public interface IProductRepository
    {
        // Here will eventually be our products database
        Task<Product[]> GetProductsAsync(); 
    }
}
