import { Box, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const NotFound: React.FC = () => {
	return (
		<Box>
			<Heading>Here is no Todos</Heading>
			<Link as={RouterLink} to="/" color="blue.400">
				Back to work
			</Link>
		</Box>
	)
}

export default NotFound
