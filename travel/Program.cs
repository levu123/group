using Microsoft.EntityFrameworkCore;
using System;
using travel;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Swashbuckle.AspNetCore.SwaggerGen;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options => 
{
    options.AddDefaultPolicy(
        policy =>
        {
          
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<DbCon>(options =>
    options.UseMySql(connectionString,
        new MySqlServerVersion(ServerVersion.AutoDetect(connectionString).Version),
        b => b.MigrationsAssembly(typeof(Program).Assembly.FullName)
    )
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(); 

app.UseAuthorization();
app.MapControllers();
app.Run();