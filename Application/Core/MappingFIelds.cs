


using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingFIelds: Profile
    {
    
        public MappingFIelds(){
            //It will look what we sending from our request to and the one in our database
            //it will match property names
            CreateMap<Activity,Activity>();
        }
    }
}