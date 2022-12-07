import {Link} from 'react-router-dom';
import  {useEffect} from 'react';
function PopularTeacher(){
    useEffect(()=>{
        document.title='Popular Teachers';
    });
    return(
        <div className="container mt-4">
        <h3 className="pb-1 mb-4">Popular Teachers</h3>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/teacher-detail/1" ><img src="teacher.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/teacher-detail/1" >Teacher Name</ Link></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>                    
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
             <a href="#" ><img src="teacher.png" className="card-img-top" alt="..."/></a>
              <div className="card-body">
                <h5 className="card-title"><a href="#" >Teacher Name</a></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
             <a href="#" ><img src="teacher.png" className="card-img-top" alt="..."/></a>
              <div className="card-body">
                <h5 className="card-title"><a href="#" >Teacher Name</a></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
             <a href="#" ><img src="teacher.png" className="card-img-top" alt="..."/></a>
              <div className="card-body">
                <h5 className="card-title"><a href="#" >Teacher Name</a></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="#" ><img src="teacher.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/CourseDetail/1" >Teacher Name</ Link></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="#" ><img src="teacher.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/CourseDetail/1" >Teacher Name</ Link></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="#" ><img src="teacher.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/CourseDetail/1" >Teacher Name</ Link></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-4">
            <div className="card">
            <Link to="/#" ><img src="teacher.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/CourseDetail/1" >Teacher Name</ Link></h5>        
              </div>
              <div className='card-footer'>
                <div className='tittle'>
                      <span>Rating: 4.5/5</span>
                      
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* paginatioin */}
        <nav aria-label="Page navigation example mt-4">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </div>
    );

}
export default PopularTeacher;