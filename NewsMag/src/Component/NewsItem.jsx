import image from '../assets/depositphotos_283219040-stock-photo-news-icon-background.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-1 py-1" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px",width:"337px"}}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Click this to find out more about it !!"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
