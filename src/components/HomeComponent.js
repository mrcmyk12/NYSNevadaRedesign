import React, { useState } from "react";
import {
	Card,
	CardImg,
	CardBody,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";
import { slideInRight, slideInDown, fadeInDownBig } from "react-animations";

import Radium, { StyleRoot } from "radium";

const styles = {
	slideInDown: {
		animation: "x 1s",
		animationName: Radium.keyframes(slideInDown, "slideInDown")
	},
	slideInRight: {
		animation: "x 1s",
		animationName: Radium.keyframes(slideInRight, "slideInRight")
	},
	fadeInDownBig: {
		animation: "x 3s",
		animationName: Radium.keyframes(fadeInDownBig, "fadeInDownBig")
	}
};

function RenderParagraph() {
	return (
		<StyleRoot style={styles.fadeInDownBig}>
			<div className="col">
				<div>
					<CardImg
						width="100%"
						className="card_image"
						src="https://cdn.shopify.com/s/files/1/0012/3895/8164/files/NYS_-_header_logo-01_360x.png?v=1543461622"></CardImg>
				</div>
				<p className="welcome_paragraph">
					Give your child the gift of sports. Create lasting memories while
					watching your child set the foundations they'll carry with them
					for the rest of their lives. At NYS, we believe your childs
					growth is paramount. And with leagues from Beginner to All-Star,
					there's a place for everyone. So from ages young to old, lace
					them up and get out and compete. We can growth with you child and
					help equip them with the skills needed in life. Instill in your
					kids a will to succeed in a supportive and safe environment.
					<strong> NYS, Where Kid's Have a Ball.</strong>
				</p>
			</div>
		</StyleRoot>
	);
}

const items = [
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_2_290x394_crop_center.png?v=1543626155",
		altText: "Slide 1",
		caption: "Baseball"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_1_290x394_crop_center.png?v=1543626240",
		altText: "Slide 1",
		caption: "Basketball"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_7_290x394_crop_center.jpg?v=1543626269",
		altText: "Slide 1",
		caption: "Cheerleading"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_4_290x394_crop_center.jpg?v=1543626165",
		altText: "Slide 1",
		caption: "Flag Football"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_3_290x394_crop_center.jpg?v=1543626136",
		altText: "Slide 1",
		caption: "Soccer"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/43681833_1163760560415940_2881335083183112192_o_290x394_crop_center.jpg?v=1594595754",
		altText: "Slide 1",
		caption: "Tackle Football"
	},
	{
		src: "https://cdn.shopify.com/s/files/1/0012/3895/8164/files/sports_tab_6_290x394_crop_center.png?v=1543626262",
		altText: "Slide 1",
		caption: "Volleyball"
	}
];

const Home = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}>
				<img src={item.src} alt={item.altText} />
				<CarouselCaption
					className="carousel_title"
					captionHeader={item.caption}
				/>
			</CarouselItem>
		);
	});

	return (
		<React.Fragment>
			<div className="container mb-5">
				<div className="row">
					<div className="col">
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}>
							<CarouselIndicators
								items={items}
								activeIndex={activeIndex}
								onClickHandler={goToIndex}
							/>
							{slides}
							<CarouselControl
								direction="prev"
								directionText="Previous"
								onClickHandler={previous}
							/>
							<CarouselControl
								direction="next"
								directionText="Next"
								onClickHandler={next}
							/>
						</Carousel>
					</div>
					<div className="col">
						<RenderParagraph />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
