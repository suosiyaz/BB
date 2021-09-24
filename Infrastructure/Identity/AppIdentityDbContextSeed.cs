using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        { 
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Siyaz",
                    Email = "siyaz@test.com",
                    UserName = "siyaz@test.com",
                    Address = new Address
                    {
                        FirstName = "Mohammed Shiyas",
                        LastName = "Puthankode",
                        Street = "Electronic City",
                        City = "Bangalore",
                        State = "Karnataka",
                        PinCode = 560100
                    }
                };

                await userManager.CreateAsync(user, "Muharram@1443");
            }
        }
    }
}