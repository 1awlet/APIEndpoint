using Application.ActivitiesProvider;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext> (opt =>{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});









builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});


builder.Services.AddMediatR(typeof(getList.Handler));

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
