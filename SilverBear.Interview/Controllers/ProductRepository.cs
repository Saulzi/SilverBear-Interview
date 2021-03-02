using System;
using System.Threading.Tasks;

namespace SilverBear.Interview.Controllers
{
    public class ProductRepository : IProductRepository
    {
        public Task<Product[]> GetProductsAsync()
        {
            return Task.FromResult(new Product[] { });          // Stub that shiznit out
        }
    }
}
