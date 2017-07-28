import React from 'react';
import EmailUpdatesForm from 'components/footer/email-updates-form';
import SocialMedia from 'components/social-media/social-media';

export default class extends React.Component {
	render() {
		return (
			<div className="footerMediaUpdates">
				<div className="footerMediaUpdates__updates">
					<EmailUpdatesForm />
				</div>
				<div className="footerMediaUpdates__media">
					<SocialMedia />
				</div>
			</div>
		)
	}
}