import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Track from './Track';
/** importing our pages */
import Tracks from './tracks';
import Module from './Module';

export default function Pages() {
	return (
		<Router primary={false} component={Fragment}>
			<Tracks path="/" />
			<Track path="/track/:trackId" />
			<Module path="/track/:trackId/module/:moduleId" />
		</Router>
	);
}
