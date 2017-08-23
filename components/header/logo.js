import React from 'react'
import Link from 'next/link'
import settings from '../../styles/settings'

export default class extends React.Component {
	render(){
		return (
			<div>
				<Link prefetch href='/'>
					<a>
						{
							this.props.home ?
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.03 120.03" className='home'>
										<g id="Layer_2" data-name="Layer 2"><g id="Content"><path className="cls-1" d="M116.62,99.83l-1.43,8-9.08,5.21L111,86.27h11c6.24,0,10.64,1.21,9.81,5.86-.76,4.32-5.08,5.93-6.36,6.33l6.07,9.14,0,.27h-8.91L118,100.54A1.38,1.38,0,0,0,116.62,99.83Zm6.65-6.8a2.77,2.77,0,0,0-2.85-3.48h-2l-1.34,7.54C121.27,97.09,122.87,95.31,123.27,93Z" /><path className="cls-1" d="M146.94,85.56c7.59,0,12.89,4.55,11.65,11.49s-8.15,11.52-15.75,11.52S130,104.05,131.2,97.05,139.35,85.56,146.94,85.56Zm-3.55,20c3.71,0,5.78-4.42,6.63-9.18s-.8-7.94-3.58-7.94-5.51,3.11-6.37,7.94S139.68,105.53,143.39,105.53Z" /><path className="cls-1" d="M175.64,85.56a14,14,0,0,1,9.22,3.12l-3.63,2.64A8.62,8.62,0,0,0,175.58,89c-5.38,0-6.95,5.12-7.46,8s-.77,8,4.6,8a11.93,11.93,0,0,0,6.48-2.31l2.69,2.65a18.75,18.75,0,0,1-10.34,3.15c-7.94,0-13.5-4.62-12.27-11.52S167.7,85.56,175.64,85.56Z" /><path className="cls-1" d="M190.53,107.87h-8.15l3.85-21.6h8.15l-1.79,10,10.53-10h6.14l-.06.3-9.73,9.18,7.86,11.86,0,.27h-8.87l-4.89-8a1.36,1.36,0,0,0-1.43-.74Z" /><path className="cls-1" d="M219.16,89.82l-.95,5.32h9.53l-.63,3.55h-9.54l-1,5.63h10.78l0,.27-2.11,3.28H207.79l3.85-21.6h19.12l-2,3.28,0,.27Z" /><path className="cls-1" d="M251.63,89.55l0,.27h-6.8L240.52,114l-7.1-6.14,3.21-18.05h-6.8l0-.27L232,86.27h21.68Z" /><path className="cls-1" d="M223.41,47.28a35.71,35.71,0,0,0,13.75-9.11,25.1,25.1,0,0,0,6.66-13c1.5-8.5-1-14.78-7.67-19.31C230.26,1.84,222.32,0,211.66,0L137.39.09,127.11,3.5c2.54,9.39,3.16,20.78,1.31,33C126,52.22,120,66.28,112.27,76.2h53.18l5.3-29.78A76,76,0,0,0,202.57,73.3C223.72,82.64,254,82.05,254,82.05ZM200.73,9.35l-1.37,3.12L197,13.85l-.62,3-4.44,4.24.25.19-.84,1.62,1,.53a7.41,7.41,0,0,1,.83,3,15.15,15.15,0,0,1-.73,2.69,11.39,11.39,0,0,0-1.51,1.59,5.41,5.41,0,0,0-.9,3.13,11.46,11.46,0,0,0-2.47.37,5.8,5.8,0,0,0-1.12.63l.43,3.21.9.2,0,4.47-.1,1.4,1,1.62-.37,2.5.59,7.56-2.76-4.24L184,47.81l.4-1.1-1-3.14-1.8-2.33a.86.86,0,0,1-.69-.42,25.73,25.73,0,0,1-.41-4.58l-.79,0-.15-.93-.16-1-2.15.23-1.06-.31-2.27-1.64-.57-1.14-1-2.15.46-1.81a2.93,2.93,0,0,1-1.37-1.57,3.71,3.71,0,0,1,.23-1.85l-.41.09-3.41-1.76a1.14,1.14,0,0,1-1.5.7C166,23,162,19.59,162,19.59a16.75,16.75,0,0,1-4.12-1.12,11.13,11.13,0,0,1-3.68-4l3.8.09,5.38,1.53,9.05.77,2.36,1.75.06-.39a6.59,6.59,0,0,0,2.79-.42,8.94,8.94,0,0,0,2.18-1.34l1.56-1.14,3.18.5,1.79,1.49,5.23-4,2.25-3.75L198,7.85,204,4.68Z" /><path className="cls-1" d="M248.68,91.06a3.1,3.1,0,1,1-3.12,3.08A3.08,3.08,0,0,1,248.68,91.06Zm0,5.74a2.64,2.64,0,1,0-2.56-2.66A2.55,2.55,0,0,0,248.68,96.79Zm-1.21-4.45h1.4c.86,0,1.27.34,1.27,1a.93.93,0,0,1-1,1l1,1.6h-.6l-1-1.56H248V96h-.56Zm.56,1.61h.59c.5,0,1,0,1-.6s-.41-.56-.79-.56H248Z" /><path className="cls-1" d="M124.51,40.91c4.95-24.14-3.14-36.21-3.14-36.21-12.87,1.11-18.28,6.68-18.16,6.58s12.94-.2,7.29,5.24c-5.17,5-21.9,5.36-30.85,2.62-8.4-2.58-12-3.83-12-3.83S79.66,26,85.5,30.65,94.63,35,93.31,38c-.7,1.55-4.08,1.42-7.17-.07C82.44,36.14,82,30.89,70.61,23.67c-8.89-5.62-24.76-6.93-24.76-6.93s13.32,4.47,22.54,11.6C71.62,30.83,78,38,73.71,40.63c-5.4,3.27-16.62-6.28-36.48-14.8A75.06,75.06,0,0,0,0,20s19.75,2.57,32,9.14C42.9,34.91,47.9,39.62,56.28,47.16,67.07,56.86,82,65.85,82,65.85a44.11,44.11,0,0,1-14.77-4.27,64.49,64.49,0,0,1-17.2-12.23S58.26,70.54,93,75.69a51.28,51.28,0,0,0,8.12.27A56,56,0,0,0,124.51,40.91Z" /><path className="cls-1" d="M156.79,112.57h1.46l3.9,7.46h-1.32l-.81-1.58H153.1L151.76,120h-1.32Zm.59.82-3.59,4.23h5.8Z" /><path className="cls-2" d="M125.28,113.39H120l-.4,2.5h5.61c1.3,0,1.9-.3,2-1.08l0-.32C127.38,113.66,127,113.39,125.28,113.39Z" /><path className="cls-1" d="M127.78,117.76c.11-.68-.09-1.22-1.25-1.4v0c.91-.07,1.65-.36,1.82-1.41l0-.25c.23-1.4,0-2.11-2.55-2.11h-6.91L117.71,120h6.82c2.49,0,3-.71,3.24-2.11Zm-1.16.34c-.14.83-.6,1.1-2.31,1.1H119l.41-2.48h5.7c1.06,0,1.69.14,1.5,1.31Zm.62-3.6,0,.32c-.13.78-.72,1.08-2,1.08h-5.61l.4-2.5h5.32C127,113.39,127.38,113.66,127.24,114.5Z" /><path className="cls-1" d="M129.76,112.57h6.91c2.49,0,2.77.71,2.54,2.11l0,.25c-.17,1-.91,1.34-1.82,1.41v0c1.16.19,1.36.72,1.25,1.4l-.37,2.27h-1.1l.33-2c.19-1.16-.44-1.31-1.5-1.31h-5.7l-.55,3.3h-1.17Zm6.24,3.33c1.3,0,1.9-.3,2-1.08l0-.32c.14-.83-.24-1.1-2-1.1h-5.32l-.4,2.5Z" /><path className="cls-1" d="M140,115.2c.31-1.88,1.19-2.79,3.53-2.79h5c2.34,0,2.93.91,2.62,2.79l-.33,2c-.31,1.88-1.19,2.79-3.53,2.79h-5c-2.34,0-2.93-.91-2.62-2.79Zm10-.38c.21-1.3-.65-1.59-1.77-1.58h-4.73c-1.12,0-2.08.29-2.29,1.59l-.46,2.8c-.21,1.3.65,1.59,1.77,1.58h4.73c1.12,0,2.08-.29,2.29-1.58Z" /><path className="cls-1" d="M175.63,112.57h1.17l-.52,3.2h7.8l.52-3.2h1.17L184.56,120h-1.17l.56-3.43h-7.8l-.56,3.43h-1.17Z" /><path className="cls-1" d="M187,112.57h8.48l-.13.82h-7.31l-.39,2.38h7l-.13.82h-7l-.42,2.6h7.36l-.13.82H185.8Z" /><path className="cls-1" d="M201.25,112.57h1.45l3.9,7.46h-1.32l-.81-1.58h-6.92L196.22,120h-1.32Zm.59.82-3.6,4.23H204Z" /><path className="cls-1" d="M208.36,112.57h7c2.9,0,3.56.78,3.08,3.72C218,119,217,120,214.09,120h-6.94Zm8.95,3.36c.35-2.15-.36-2.54-1.79-2.54H209.4l-.95,5.81h5.93c1.42,0,2.44-.27,2.81-2.5Z" /><path className="cls-1" d="M163.84,112.57h7c2.9,0,3.56.78,3.08,3.72-.45,2.74-1.4,3.73-4.33,3.73h-6.94Zm8.94,3.36c.35-2.15-.36-2.54-1.79-2.54h-6.12l-.95,5.81h5.93c1.42,0,2.44-.27,2.81-2.5Z" /><path className="cls-1" d="M219.1,117.6h1.1l-.09.53c-.12.73.28,1.08,1.73,1.08h3.63c1.69,0,2.24-.31,2.42-1.38s-.24-1.17-1.69-1.17H224c-3.57,0-4.71-.18-4.38-2.16.28-1.7,1.51-2.08,3.92-2.08H226c2.9,0,3.52.64,3.3,2l0,.26h-1.1c.17-1.18.06-1.4-3-1.4h-1.24c-2.25,0-3.07.1-3.27,1.33-.14.89.13,1.18,2,1.18h3.46c2.28,0,3.14.57,2.93,1.83l-.08.48c-.3,1.83-2.06,2-3.79,2h-3.24c-1.7,0-3.17-.26-2.9-1.88Z" /></g></g>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.69 35.9" className='mobileHome'>
										<g data-name="Layer 2"><g id="Content"><path className="cls-1" d="M10.95,14.86,9.46,23.24,0,28.66,5,.73H16.53C23,.73,27.62,2,26.75,6.84c-.8,4.5-5.29,6.17-6.63,6.59L26.45,23l0,.28H17.11L12.4,15.6A1.43,1.43,0,0,0,10.95,14.86Zm6.93-7.08a2.88,2.88,0,0,0-3-3.63H12.85L11.46,12C15.79,12,17.46,10.15,17.88,7.78Z" /><path className="cls-1" d="M42.54,0C50.45,0,56,4.74,54.68,12S46.18,24,38.27,24,24.84,19.26,26.14,12,34.63,0,42.54,0Zm-3.7,20.79c3.87,0,6-4.6,6.91-9.56S44.9,3,42,3s-5.74,3.24-6.64,8.27S35,20.79,38.84,20.79Z" /><path className="cls-1" d="M72.43,0A14.58,14.58,0,0,1,82,3.25L78.26,6a9,9,0,0,0-5.9-2.37c-5.6,0-7.24,5.34-7.77,8.34s-.8,8.38,4.79,8.38a12.43,12.43,0,0,0,6.75-2.41l2.8,2.76A19.53,19.53,0,0,1,68.16,24c-8.27,0-14.06-4.81-12.78-12S64.16,0,72.43,0Z" /><path className="cls-1" d="M87.94,23.24H79.45l4-22.5H92L90.09,11.2l11-10.46h6.4l-.06.31L97.26,10.61,105.44,23l-.05.28H96.15L91,14.93a1.42,1.42,0,0,0-1.49-.77Z" /><path className="cls-1" d="M117.77,4.43l-1,5.55h9.93l-.66,3.7h-9.93l-1,5.86h11.23l0,.28-2.2,3.42H105.93l4-22.5h19.92l-2.1,3.42,0,.28Z" /><path className="cls-1" d="M151.59,4.15l-.05.28h-7.08L140,29.64l-7.39-6.4L136,4.43h-7.08l.05-.28L131.1.73h22.59Z" /><path className="cls-1" d="M148.51,5.72a3.23,3.23,0,1,1-3.25,3.21A3.21,3.21,0,0,1,148.51,5.72Zm0,6a2.66,2.66,0,0,0,2.65-2.77,2.66,2.66,0,1,0-5.31,0A2.66,2.66,0,0,0,148.51,11.7Zm-1.26-4.64h1.46c.9,0,1.32.35,1.32,1.08a1,1,0,0,1-1,1l1.08,1.66h-.63l-1-1.62h-.62v1.62h-.59Zm.59,1.67h.61c.52,0,1,0,1-.62s-.43-.58-.83-.58h-.78Z" /><path className="cls-1" d="M52.8,28.13h1.52l4.07,7.77H57l-.85-1.64H48.95l-1.39,1.64H46.18Zm.62.86-3.74,4.4h6Z" /><path className="cls-1" d="M22.57,33.54c.12-.71-.09-1.27-1.31-1.46v0c.95-.08,1.72-.38,1.9-1.47l0-.26c.24-1.46-.05-2.2-2.66-2.2H13.35L12.09,35.9h7.1c2.6,0,3.13-.74,3.37-2.2Zm-1.21.35C21.22,34.76,20.74,35,19,35H13.45l.43-2.58h5.94c1.11,0,1.76.15,1.57,1.36ZM22,30.14l0,.34c-.13.81-.75,1.13-2.11,1.13H14L14.43,29H20C21.76,29,22.15,29.27,22,30.14Z" /><path className="cls-1" d="M24.63,28.13h7.19c2.6,0,2.89.74,2.65,2.2l0,.26c-.18,1.09-.95,1.39-1.89,1.47v0c1.21.19,1.42.75,1.3,1.46l-.39,2.36H32.32l.34-2.08c.2-1.21-.46-1.36-1.57-1.36H25.15l-.57,3.44H23.37Zm6.5,3.47c1.36,0,2-.31,2.11-1.13l0-.34c.14-.87-.25-1.15-2-1.15H25.71l-.42,2.61Z" /><path className="cls-1" d="M35.3,30.87c.32-2,1.24-2.91,3.68-2.91h5.18c2.44,0,3.05.94,2.73,2.9L46.55,33c-.32,2-1.24,2.91-3.68,2.91H37.69C35.25,35.9,34.63,35,35,33Zm10.44-.4c.22-1.35-.67-1.65-1.84-1.65H39c-1.17,0-2.16.3-2.38,1.65l-.48,2.91c-.22,1.35.67,1.65,1.84,1.65h4.93c1.17,0,2.16-.3,2.38-1.65Z" /><path className="cls-1" d="M72.43,28.13h1.22l-.54,3.33h8.13l.54-3.33H83L81.72,35.9H80.51l.58-3.57H73l-.58,3.57H71.16Z" /><path className="cls-1" d="M84.28,28.14h8.83L93,29H85.36L85,31.47h7.32l-.14.86H84.82L84.38,35H92l-.14.86H83Z" /><path className="cls-1" d="M99.11,28.13h1.51l4.07,7.77h-1.38l-.85-1.64H95.26l-1.39,1.64H92.49Zm.62.86L96,33.39h6Z" /><path className="cls-1" d="M106.52,28.14h7.27c3,0,3.71.81,3.21,3.88-.47,2.85-1.45,3.88-4.51,3.88h-7.23Zm9.32,3.5C116.2,29.4,115.46,29,114,29H107.6l-1,6h6.18c1.48,0,2.54-.28,2.92-2.61Z" /><path className="cls-1" d="M60.13,28.14H67.4c3,0,3.71.81,3.21,3.88-.47,2.85-1.45,3.88-4.51,3.88H58.87Zm9.32,3.5c.37-2.24-.38-2.65-1.87-2.65H61.21l-1,6H66.4c1.48,0,2.54-.28,2.92-2.61Z" /><path className="cls-1" d="M117.7,33.37h1.14l-.09.55c-.12.76.29,1.12,1.81,1.12h3.78c1.76,0,2.34-.32,2.52-1.44s-.25-1.22-1.76-1.22h-2.31c-3.72,0-4.9-.19-4.57-2.25.29-1.77,1.57-2.17,4.08-2.17h2.62c3,0,3.67.66,3.44,2l0,.27h-1.14c.18-1.23.06-1.46-3.13-1.46h-1.29c-2.35,0-3.2.11-3.41,1.38-.15.92.13,1.23,2,1.23H125c2.37,0,3.27.59,3.06,1.91l-.08.5c-.31,1.91-2.15,2-4,2h-3.38c-1.78,0-3.3-.27-3-2Z" /></g></g>
									</svg>
							</span>
							:
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.69 35.9">
								<g data-name="Layer 2"><g id="Content"><path className="cls-1" d="M10.95,14.86,9.46,23.24,0,28.66,5,.73H16.53C23,.73,27.62,2,26.75,6.84c-.8,4.5-5.29,6.17-6.63,6.59L26.45,23l0,.28H17.11L12.4,15.6A1.43,1.43,0,0,0,10.95,14.86Zm6.93-7.08a2.88,2.88,0,0,0-3-3.63H12.85L11.46,12C15.79,12,17.46,10.15,17.88,7.78Z" /><path className="cls-1" d="M42.54,0C50.45,0,56,4.74,54.68,12S46.18,24,38.27,24,24.84,19.26,26.14,12,34.63,0,42.54,0Zm-3.7,20.79c3.87,0,6-4.6,6.91-9.56S44.9,3,42,3s-5.74,3.24-6.64,8.27S35,20.79,38.84,20.79Z" /><path className="cls-1" d="M72.43,0A14.58,14.58,0,0,1,82,3.25L78.26,6a9,9,0,0,0-5.9-2.37c-5.6,0-7.24,5.34-7.77,8.34s-.8,8.38,4.79,8.38a12.43,12.43,0,0,0,6.75-2.41l2.8,2.76A19.53,19.53,0,0,1,68.16,24c-8.27,0-14.06-4.81-12.78-12S64.16,0,72.43,0Z" /><path className="cls-1" d="M87.94,23.24H79.45l4-22.5H92L90.09,11.2l11-10.46h6.4l-.06.31L97.26,10.61,105.44,23l-.05.28H96.15L91,14.93a1.42,1.42,0,0,0-1.49-.77Z" /><path className="cls-1" d="M117.77,4.43l-1,5.55h9.93l-.66,3.7h-9.93l-1,5.86h11.23l0,.28-2.2,3.42H105.93l4-22.5h19.92l-2.1,3.42,0,.28Z" /><path className="cls-1" d="M151.59,4.15l-.05.28h-7.08L140,29.64l-7.39-6.4L136,4.43h-7.08l.05-.28L131.1.73h22.59Z" /><path className="cls-1" d="M148.51,5.72a3.23,3.23,0,1,1-3.25,3.21A3.21,3.21,0,0,1,148.51,5.72Zm0,6a2.66,2.66,0,0,0,2.65-2.77,2.66,2.66,0,1,0-5.31,0A2.66,2.66,0,0,0,148.51,11.7Zm-1.26-4.64h1.46c.9,0,1.32.35,1.32,1.08a1,1,0,0,1-1,1l1.08,1.66h-.63l-1-1.62h-.62v1.62h-.59Zm.59,1.67h.61c.52,0,1,0,1-.62s-.43-.58-.83-.58h-.78Z" /><path className="cls-1" d="M52.8,28.13h1.52l4.07,7.77H57l-.85-1.64H48.95l-1.39,1.64H46.18Zm.62.86-3.74,4.4h6Z" /><path className="cls-1" d="M22.57,33.54c.12-.71-.09-1.27-1.31-1.46v0c.95-.08,1.72-.38,1.9-1.47l0-.26c.24-1.46-.05-2.2-2.66-2.2H13.35L12.09,35.9h7.1c2.6,0,3.13-.74,3.37-2.2Zm-1.21.35C21.22,34.76,20.74,35,19,35H13.45l.43-2.58h5.94c1.11,0,1.76.15,1.57,1.36ZM22,30.14l0,.34c-.13.81-.75,1.13-2.11,1.13H14L14.43,29H20C21.76,29,22.15,29.27,22,30.14Z" /><path className="cls-1" d="M24.63,28.13h7.19c2.6,0,2.89.74,2.65,2.2l0,.26c-.18,1.09-.95,1.39-1.89,1.47v0c1.21.19,1.42.75,1.3,1.46l-.39,2.36H32.32l.34-2.08c.2-1.21-.46-1.36-1.57-1.36H25.15l-.57,3.44H23.37Zm6.5,3.47c1.36,0,2-.31,2.11-1.13l0-.34c.14-.87-.25-1.15-2-1.15H25.71l-.42,2.61Z" /><path className="cls-1" d="M35.3,30.87c.32-2,1.24-2.91,3.68-2.91h5.18c2.44,0,3.05.94,2.73,2.9L46.55,33c-.32,2-1.24,2.91-3.68,2.91H37.69C35.25,35.9,34.63,35,35,33Zm10.44-.4c.22-1.35-.67-1.65-1.84-1.65H39c-1.17,0-2.16.3-2.38,1.65l-.48,2.91c-.22,1.35.67,1.65,1.84,1.65h4.93c1.17,0,2.16-.3,2.38-1.65Z" /><path className="cls-1" d="M72.43,28.13h1.22l-.54,3.33h8.13l.54-3.33H83L81.72,35.9H80.51l.58-3.57H73l-.58,3.57H71.16Z" /><path className="cls-1" d="M84.28,28.14h8.83L93,29H85.36L85,31.47h7.32l-.14.86H84.82L84.38,35H92l-.14.86H83Z" /><path className="cls-1" d="M99.11,28.13h1.51l4.07,7.77h-1.38l-.85-1.64H95.26l-1.39,1.64H92.49Zm.62.86L96,33.39h6Z" /><path className="cls-1" d="M106.52,28.14h7.27c3,0,3.71.81,3.21,3.88-.47,2.85-1.45,3.88-4.51,3.88h-7.23Zm9.32,3.5C116.2,29.4,115.46,29,114,29H107.6l-1,6h6.18c1.48,0,2.54-.28,2.92-2.61Z" /><path className="cls-1" d="M60.13,28.14H67.4c3,0,3.71.81,3.21,3.88-.47,2.85-1.45,3.88-4.51,3.88H58.87Zm9.32,3.5c.37-2.24-.38-2.65-1.87-2.65H61.21l-1,6H66.4c1.48,0,2.54-.28,2.92-2.61Z" /><path className="cls-1" d="M117.7,33.37h1.14l-.09.55c-.12.76.29,1.12,1.81,1.12h3.78c1.76,0,2.34-.32,2.52-1.44s-.25-1.22-1.76-1.22h-2.31c-3.72,0-4.9-.19-4.57-2.25.29-1.77,1.57-2.17,4.08-2.17h2.62c3,0,3.67.66,3.44,2l0,.27h-1.14c.18-1.23.06-1.46-3.13-1.46h-1.29c-2.35,0-3.2.11-3.41,1.38-.15.92.13,1.23,2,1.23H125c2.37,0,3.27.59,3.06,1.91l-.08.5c-.31,1.91-2.15,2-4,2h-3.38c-1.78,0-3.3-.27-3-2Z" /></g></g>
							</svg>
						}
					</a>
				</Link>
				<style jsx>{`
					a{
						&:hover{
							& .cls-1{
								fill: #860e1b;
							}
						}
					}
					svg{
						max-height: 60px;
						max-width: 130px;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
					.cls-1{
						fill:#fff;
					}
					.home{
						display: none
					}
					@media(min-width: ${settings.navBreakpoint}px){
						svg{
							max-height: 100px;
							max-width: 190px;
							left: 30px;
							transform: translate(0, -50%);
						}
						.mobileHome{
							display: none;
						}
						.home{
							display: block;
							&:hover{
								& .cls-1{
									fill: #fff;
									opacity: .8;
								}
							}
						}
					}
				`}</style>
			</div>
		)
	}
}
