using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace SilverBear.Interview.Controllers
{
    public class ProductsController: ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository ?? throw new System.ArgumentNullException(nameof(productRepository));
        }
        [HttpGet("Products")]
        public async Task<IActionResult> GetProducts()
        {
            // In reality we would be hitting DB ETC herE
            var products = await _productRepository.GetProductsAsync();

            return Ok(products);

        }
    }
}
