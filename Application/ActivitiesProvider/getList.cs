using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ActivitiesProvider
{
    public class getList
    {
        //We specifiy what object we returning from this query inside
    //IREQUEST
        public class Query : IRequest<List<Activity>>{};

    //We pass first our query then we passing what we returning
   //WHich is list of activity
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
         
          private readonly DataContext _context;
            public Handler(DataContext context)
            {

             _context= context;
            }
    // Now time to implement the handler and also get the db first

         public async Task<List<Activity>> Handle (Query request, CancellationToken Toke){

            return await _context.Activities.ToListAsync();
         }

    
        }


 
    }
}