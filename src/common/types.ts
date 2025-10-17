import type {Dispatch, SetStateAction} from 'react';

export type VariableLiteral = string | number | boolean;

export interface IObjectLiteral<T = VariableLiteral> {
  [key: string]: T | any;
}

export interface UploaderProps {
  handleZipUpload: (file: File) => void
  isLoading?: boolean
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>;
}