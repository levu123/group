using Microsoft.EntityFrameworkCore;
using System;
using travel.model;

namespace travel
{
    public class DbCon : DbContext
    {
        public DbCon(DbContextOptions<DbCon> options) : base(options)
        {
        }

        public DbSet<Hotel> Hotels { get; set; }

   
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
     
        }
    }
}
