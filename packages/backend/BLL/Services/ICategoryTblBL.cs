using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface ICategoryTblBL
    {
        List<CategoryTblDTO> GetCategoriesBL();
        CategoryTblDTO GetCategoryByIdBL(int id);
        bool AddCategoryBL(CategoryTblDTO category);
        bool UpdateCategoryByIdBL(CategoryTblDTO category,int id);
        bool DeleteCategoryBL(int id);

    }
}
