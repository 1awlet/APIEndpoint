using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ActivitiesProvider
{
    public class getList
    {
        public class Query : IRequest<List<Activity>>{};


        public class Handler : IRequestHandler<Query, List<Activity>>
        {
         
          private readonly DataContext _context;
            public Handler(DataContext context)
            {

             _context= context;
            }

         public async Task<List<Activity>> Handle (Query request, CancellationToken Toke){

            return await _context.Activities.ToListAsync();
         }
        }
    }
}