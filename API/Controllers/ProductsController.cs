using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IMapper _mapper;
        public ProductsController(IGenericRepository<Product> productsRepo, IGenericRepository<ProductBrand> productBrandRepo,
            IGenericRepository<ProductType> productTypeRepo, IMapper mapper)
        {
            _mapper = mapper;
            _productBrandRepo = productBrandRepo;
            _productsRepo = productsRepo;
            _productTypeRepo = productTypeRepo;
        }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<ProducttoReturnDto>>> GetProducts()
    {
        var spec = new ProductsWithTypesAndBrandsSpecifications();
        var products = await _productsRepo.ListAsync(spec);
        return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProducttoReturnDto>>(products));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProducttoReturnDto>> GetProduct(int id)
    {
        var spec = new ProductsWithTypesAndBrandsSpecifications(id);
        var product = await _productsRepo.GetEntityWithSpec(spec);
        return _mapper.Map<Product, ProducttoReturnDto>(product);
    }
    [HttpGet("brands")]
    public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
    {
        return Ok(await _productBrandRepo.ListAllAsync());
    }
    [HttpGet("types")]
    public async Task<ActionResult<List<ProductType>>> GetProductTypes()
    {
        return Ok(await _productTypeRepo.ListAllAsync());
    }
}
}