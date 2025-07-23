using Microsoft.AspNetCore.Mvc; // For ControllerBase, ApiController, HttpGet, etc.
using Microsoft.EntityFrameworkCore; // For ToListAsync, FindAsync, etc.
using System;
using System.Collections.Generic;
using System.Linq; // You might not need this if you only use ToListAsync/FirstOrDefaultAsync directly
using System.Threading.Tasks;
using travel; // Namespace for DbCon
using travel.model;


namespace travel.Controllers
{
    // 1. ADD [ApiController] attribute
    [ApiController]
    // 2. ADD [Route] attribute for API base path
    [Route("api/[controller]")] // This will make your routes like /api/Hotels
    public class HotelsController : ControllerBase // 3. CHANGE inheritance to ControllerBase
    {
        private readonly DbCon _context;

        public HotelsController(DbCon context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet] // Marks this method as an HTTP GET endpoint
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotels() // Change return type to ActionResult<IEnumerable<Hotel>>
        {
            if (_context.Hotels == null)
            {
                return NotFound(); // Return 404 if no data
            }
            return await _context.Hotels.ToListAsync(); // Returns JSON data
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")] // Marks this as an HTTP GET endpoint with an ID parameter
        public async Task<ActionResult<Hotel>> GetHotel(int id) // Change return type to ActionResult<Hotel>
        {
            if (_context.Hotels == null)
            {
                return NotFound();
            }
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null)
            {
                return NotFound(); 
            }
            return hotel; 
        }

     

        // POST: api/Hotels
        [HttpPost] 
        public async Task<ActionResult<Hotel>> PostHotel(Hotel hotel)
        {
            if (_context.Hotels == null)
            {
                return Problem("Entity set 'DbCon.Hotels' is null.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); 
            }

            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHotel), new { id = hotel.HotelID }, hotel);
        }

        
        private bool HotelExists(int id)
        {
            return _context.Hotels.Any(e => e.HotelID == id);
        }
    }
}