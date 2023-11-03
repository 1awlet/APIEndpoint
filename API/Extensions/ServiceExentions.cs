using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ActivitiesProvider;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ServiceExentions
    {

        //This will refer to builder."services".AddAplicationServices 
        //basically when you calling it inside program.cs, so you will only have to pass configuration
        public static IServiceCollection AddAplicationServices(
            this IServiceCollection services, IConfiguration config)
        {

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.WithOrigins("http://localhost:3001")
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });


            services.AddMediatR(typeof(getList.Handler));

            //services.AddAutoMapper(typeof )
            services.AddAutoMapper(typeof(MappingFIelds).Assembly);


return services;
        }
    }
}