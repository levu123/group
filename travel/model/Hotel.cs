using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace travel.model
{
    public class Hotel
    {
        [Key]
        public int HotelID { get; set; }

        [Required]
        [StringLength(255)]
        public string HotelName { get; set; } = string.Empty;

        [StringLength(100)]
        public string? Location { get; set; }

        [Column(TypeName = "decimal(2,1)")]
        public decimal? ReviewRating { get; set; }

        public int? ReviewCount { get; set; }

        public int? NumberOfRooms { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? OriginalPrice { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? DiscountedPrice { get; set; }

        [StringLength(500)] 
        public string? ImageUrl { get; set; }
    }
}