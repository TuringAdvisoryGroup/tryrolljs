import { AbstractConnector } from '@web3-react/abstract-connector'
import { StyleProp, ViewStyle } from 'react-native'
import { View } from 'native-base'
import { Body, Button, Spinner } from '../../atoms'
import { useTheme, useEthAddress } from '../../hooks'
import { shortenAddress } from '../../utils'
import { container, padding } from '../../styles'
import { Dropdown } from '../dropdown'
import { AccountDropdown } from '../accountDropdown'

export type HandleWeb3Connect = (c: AbstractConnector) => void

export type ConnectWeb3ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle> // TODO define type properly
  onPress: () => void
  activity?: boolean
}

export const ConnectWeb3Button = ({
  buttonStyle,
  onPress,
  activity,
}: ConnectWeb3ButtonProps) => {
  const address = useEthAddress()
  const theme = useTheme()

  if (activity) {
    return (
      <View
        style={[
          container.alignCenter,
          container.justifyCenter,
          container.fullHeight,
          padding.p4,
        ]}
      >
        <Spinner />
      </View>
    )
  }

  if (address) {
    return (
      <Dropdown
        renderDropdown={() => (
          <AccountDropdown
            onSwitchAccounts={() => {
              onPress()
            }}
          />
        )}
      >
        <View
          style={[
            container.row,
            padding.p8,
            container.borderRadius,
            { backgroundColor: theme.background.page },
          ]}
        >
          <Body>{shortenAddress(address)}</Body>
        </View>
      </Dropdown>
    )
  }

  return (
    <Button
      style={buttonStyle}
      variant="primary"
      title="Connect Wallet"
      onPress={onPress}
    />
  )
}
