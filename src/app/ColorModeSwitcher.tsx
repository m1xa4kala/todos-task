import * as React from 'react'
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(
		<MoonIcon />,
		<SunIcon />
	)

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: 'inline-flex', justifySelf: 'flex-end' }}
				key={useColorModeValue('light', 'dark')}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duraiton: 0.2 }}
			>
				<IconButton
					size="md"
					fontSize="lg"
					variant="ghost"
					colorScheme={useColorModeValue('purple', 'orange')}
					marginLeft="2"
					onClick={toggleColorMode}
					icon={SwitchIcon}
					aria-label={`Switch to ${text} mode`}
					{...props}
				/>
			</motion.div>
		</AnimatePresence>
	)
}
