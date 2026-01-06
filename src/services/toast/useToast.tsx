import { ToastService } from './toastTypes'
// import {useToastContext} from './useToastContext';
import { useToastServiceZustand, useToastZustand } from './useToastZustand'

/**
 * @description Um hook que fornece acesso ao estado do toast.
 * @returns O objeto de estado atual do toast.
 */
export function useToast(): ToastService['toast'] {
  return useToastZustand()

  // implementation with context
  // const {toast} = useToastContext();
  // return toast;
}

type ToastServiceProps = Pick<ToastService, 'showToast' | 'hideToast'>
/**
 * @description Um hook que fornece acesso aos métodos do serviço de toast.
 * @returns Um objeto contendo os métodos `showToast` e `hideToast`.
 */
export function useToastService(): ToastServiceProps {
  return useToastServiceZustand()

  // implementation with context
  // const {showToast, hideToast} = useToastContext();
  // return {
  //   showToast,
  //   hideToast,
  // };
}
