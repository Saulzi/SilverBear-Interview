using System;
using System.Threading.Tasks;

namespace SilverBear.Interview.Controllers
{
    public class ProductRepository : IProductRepository
    {
        public Task<Product[]> GetProductsAsync()
        {
            return Task.FromResult(new [] {
                new Product
                {
                    Ram =          "8 GB",
                    Storage =      "1 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "16 GB",
                    Storage =      "2 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "8 GB",
                    Storage =      "3 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "16 GB",
                    Storage =      "4 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "32 GB",
                    Storage =      "750 GB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "32 GB",
                    Storage =      "2 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "8 GB",
                    Storage =      "2 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                new Product
                {
                    Ram =          "16 GB",
                    Storage =      "500 GB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                 new Product
                {
                    Ram =          "2 GB",
                    Storage =      "2 TB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },

                  new Product
                {
                    Ram =          "512 MB",
                    Storage =      "80 GB SSD",
                    Connectivity = new [] { "2 x USB 3.0" , "4 x USB 2.0" },
                    Gpu=           "NVIDIA GeForce GTX 770",
                    Weight=        "8.1 kg",
                    Psu=           "500 W PSU",
                    Cpu=            "Intel® Celeron™ N3050 Processor"
                },



            });          // Stub that shiznit out for now lets hard code the data 
        }
    }
}
