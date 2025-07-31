using AutoMapper;
using BLL.Services;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ServerShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryTblController : ControllerBase
    {
        ICategoryTblBL iBL;
        public CategoryTblController(ICategoryTblBL iBL)
        {
            this.iBL = iBL;
        }


        [HttpGet("GetCategories")]
        public List<CategoryTblDTO> GetCategories()
        {
            return iBL.GetCategoriesBL();
        }


        [HttpGet("GetCategoryById")]
        public CategoryTblDTO GetCategoryById(int id)
        {
            return iBL.GetCategoryByIdBL(id);
        }


        [HttpPost("UpdateCategoryById")]
        public bool UpdateCategoryById(CategoryTblDTO category, int id)
        {
                return iBL.UpdateCategoryByIdBL(category, id);
        }


        [HttpPut("AddCategory")]
        public bool AddCategory(CategoryTblDTO category)
        {
                return iBL.AddCategoryBL(category);
        }


        [HttpDelete("DeleteCategory")]
        public bool DeleteCategory(int id)
        {
                iBL.DeleteCategoryBL(id);
                return iBL.DeleteCategoryBL(id);
        }





    }
}
