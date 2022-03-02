using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int Age { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Identification { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Gender { get; set; }

        [Column(TypeName = "varchar(200)")]
        public string? Diseases { get; set; }

        [Column(TypeName = "varchar(200)")]
        public string? AditionalAttributes { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool Diabetic { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool HasLicense { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool UseGlasses { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool IsActive { get; set; }

    }
}
