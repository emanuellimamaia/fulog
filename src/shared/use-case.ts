export interface UseCase<Input, Result> {
  execute(input: Input): Promise<Result>
}