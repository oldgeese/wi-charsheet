import { FormControl, InputLabel, MenuItem, Select, styled, TextField, TextFieldProps, Typography } from "@mui/material"
import { Character } from "@wi-charsheet/character"
import _ from "lodash"
import { useCallback, useContext, useEffect } from 'react'
import { Control, Controller, ControllerProps, useFormContext } from "react-hook-form"
import { Navigator, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom'
import { Blocker, History, Transition } from 'history'
import ReactDOM from "react-dom"
import ExitDialog from "./ExitDialog"

export const NumberInput = (arg: Omit<ControllerProps<Character>, "render"> & TextFieldProps) => {
  const { formState: { errors } } = useFormContext<Character>()

  return <Controller
    name={arg.name}
    control={arg.control}
    render={({ field }) => (
      <TextField id={field.name} label={arg.label} variant="outlined" type="number" fullWidth={true} {...field}
        onChange={(e) => field.onChange(Number.isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}
        error={_.get(errors, field.name) ? true : false}
        helperText={_.get(errors, field.name)?.message}/>
    )}
    />
}

type SelectAbilityProps = {
  name: any
  control: Control<Character, any> | undefined
}

export const SelectAbility = (props: SelectAbilityProps) => {
  const {name, control} = props
  return <Controller
    name={name}
    control={control}
    render={({ field }) => <FormControl fullWidth={true}>
      <InputLabel id={field.name}>能力</InputLabel>
      <Select
        id={field.name}
        label="能力"
        {...field}
      >
        <MenuItem value="筋力">筋力</MenuItem>
        <MenuItem value="敏捷">敏捷</MenuItem>
        <MenuItem value="技術">技術</MenuItem>
        <MenuItem value="知力">知力</MenuItem>
        <MenuItem value="感性">感性</MenuItem>
        <MenuItem value="魅力">魅力</MenuItem>
      </Select>
    </FormControl>}
    />
}

export const ConsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

/**
 * These hooks re-implement the now removed useBlocker and usePrompt hooks in 'react-router-dom'.
 * Thanks for the idea @piecyk https://github.com/remix-run/react-router/issues/8139#issuecomment-953816315
 * Source: https://github.com/remix-run/react-router/commit/256cad70d3fd4500b1abcfea66f3ee622fb90874#diff-b60f1a2d4276b2a605c05e19816634111de2e8a4186fe9dd7de8e344b65ed4d3L344-L381
 */
/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @param  blocker
 * @param  when
 * @see https://reactrouter.com/api/useBlocker
 */
export function useBlocker( blocker: Blocker, when = true ): void {
    const { navigator } = useContext(NavigationContext)

    useEffect( () => {
        if ( ! when ) return;

        const unblock = (navigator as Navigator & Pick<History, 'block'>).block( ( tx ) => {
            const autoUnblockingTx = {
                ...tx,
                retry() {
                    // Automatically unblock the transition so it can play all the way
                    // through before retrying it. TODO: Figure out how to re-enable
                    // this block if the transition is cancelled for some reason.
                    unblock();
                    tx.retry();
                },
            };

            blocker( autoUnblockingTx );
        } );

        return unblock;
    }, [ navigator, blocker, when ] );
}
/**
 * Prompts the user with an Alert before they leave the current screen.
 *
 * @param  message
 * @param  when
 */
export function usePrompt( message: string, when = true ) {
  const blocker = useCallback(
    (tx: Transition) => {
      const element = document.createElement('div');
      element.setAttribute('id', 'prompt-dialog-container');
      element.setAttribute('aria-hidden', 'true');

      const closePrompt = (state: boolean) => {
        if (element) {
          ReactDOM.unmountComponentAtNode(element);
        }
        if (!state) {
          document.body.removeChild(element);
        } else {
          tx.retry();
        }
      };

      document.body.appendChild(element);
      ReactDOM.render(
          <ExitDialog
            open={!!message}
            message={message}
            onClose={() => closePrompt(false)}
            onConfirm={() => closePrompt(true)}
            />,
        element
      );
    },
    [ message ]
  );

  useBlocker( blocker, when );
}
