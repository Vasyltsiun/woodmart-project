import { Button, Card, CardContent, TextField } from '@mui/material'
import { useState } from 'react'

type Props = {}
type Review = {
    name: string
    message: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = []

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.message === '') {
            alert('All lields are required')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                message: '',
            })
        }
    }
    return (
        <div
            style={{
                margin: '40px 0',
            }}
        >
            <div className="reviews">Reviews</div>
            <div className="reviews_content">
                <form className="reviews_form" onSubmit={onSend}>
                    <h3>Please leave a review</h3>
                    <div className="review_name_field">
                        <TextField
                            size="small"
                            placeholder="Your name"
                            onChange={handleName}
                            value={newReview.name}
                        />
                    </div>
                    <div className="">
                        <textarea
                            className="review_text_area"
                            placeholder="Your message"
                            onChange={handleMessage}
                            value={newReview.message}
                            rows={10}
                        />
                    </div>
                    <Button
                        style={{
                            margin: '10px 0',
                        }}
                        type="submit"
                        variant="outlined"
                    >
                        Send
                    </Button>
                </form>
                <div className="reviews_left">
                    {reviews.map((item: Review, i: number) => (
                        <Card
                            key={1}
                            variant="outlined"
                            sx={{ margin: '20px 0' }}
                        >
                            <CardContent>
                                {' '}
                                <div> {item.name}</div>
                                <p>{item.message}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Reviews
