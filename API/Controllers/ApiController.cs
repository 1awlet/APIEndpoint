using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{  
    [ApiController]
    [Route("api/[controller]")]
  
    public class ApiController: ControllerBase
    {

         private  IMediator _mediator;
        
         //Mediator will return _mediator if it exists and if it doesn't
        // It will assign anything to the left to the mediator
        protected IMediator Mediator => _mediator ??=  HttpContext.RequestServices.GetService<IMediator>();
    }
}