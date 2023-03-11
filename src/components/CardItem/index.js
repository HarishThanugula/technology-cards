import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, imgUrl, description, className} = cardDetails
  const cardContainer = `"container" ${className}`
  return (
    <list className={cardContainer}>
      <h1 className="card-name">{title}</h1>
      <p className="card-story">{description}</p>
      <img src={imgUrl} alt="avatar" />
    </list>
  )
}

export default CardItem
