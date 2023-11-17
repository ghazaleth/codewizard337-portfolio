import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Toby Adams | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
