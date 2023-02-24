//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Hosting;
using Angular_Register.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

 


    builder.Services.AddDbContext<UserContext>(options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("MyDBConnection"));
    }
    
    );



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "corepolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    });
});


var app = builder.Build();
app.UseRouting();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



 


app.UseHttpsRedirection();
app.UseCors("corepolicy");
app.UseAuthorization();
app.MapControllers();
app.Run();

