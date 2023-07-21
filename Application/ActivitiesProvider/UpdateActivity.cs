using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.ActivitiesProvider
{
    public class UpdateActivity
    {
       public class Command: IRequest{

        public Activity Activity { get; set; }
       }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                 _mapper = mapper;
                _context= context;
            }

        public async Task<Unit> Handle(Command request, CancellationToken Toke){
        
            var activity= await _context.Activities.FindAsync(request.Activity.Id);

            //activity.City= request.Activity.City ?? activity.City;
            _mapper.Map(request.Activity, activity);
           await  _context.SaveChangesAsync();
            return Unit.Value;
        }

          
        }
    }
}