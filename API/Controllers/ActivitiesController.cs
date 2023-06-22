
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : ApiController
    {
  
       
  
        private readonly DataContext _context;
     
    
        public ActivitiesController(DataContext context){
            _context = context;
        }
        
   //For someone to reach this end point they will have 
   // to specify this url
    [HttpGet] //ap/activities
    public async Task<ActionResult<List<Activity>>> GetActivities (){

        return await _context.Activities.ToListAsync();
    }

 
    [HttpGet("{id}")]

    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {

        return  await _context.Activities.FindAsync(id);

    }
    

}}