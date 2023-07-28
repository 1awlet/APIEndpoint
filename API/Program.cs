using API.Extensions;
using Application.ActivitiesProvider;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

//We don't need to pass "Services", because this keyword recognizes we using builder."Services"
builder.Services.AddAplicationServices(builder.Configuration);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();






using var Scope = app.Services.CreateScope();
var service = Scope.ServiceProvider;

try
{
    var context = service.GetRequiredService<DataContext>();

   await context.Database.MigrateAsync();
   await Seed.SeedData(context);
}
catch (Exception ex)
{
   var logger =  service.GetRequiredService<ILogger<Program>>();

   logger.LogError(ex, "Error occored");
 
  
   
}


app.Run();
