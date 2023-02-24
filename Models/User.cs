using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Angular_Register.Models
{
    public class User
    {
        public int UserID { get; set; }

        public String FirstName { get; set; } = default!;
        public String LastName { get; set; } = default!;

        public String Email { get; set; } =  default!;
        public String Mobile { get; set; } =  default!;
        public String Gender { get; set; } =  default!;
        public String Password { get; set; } = default!;

        public DateTime MemberSince { get; set; }

    }
}
