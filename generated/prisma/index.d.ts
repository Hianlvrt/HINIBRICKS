
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model LegoOrder
 * 
 */
export type LegoOrder = $Result.DefaultSelection<Prisma.$LegoOrderPayload>
/**
 * Model LegoFigure
 * 
 */
export type LegoFigure = $Result.DefaultSelection<Prisma.$LegoFigurePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legoOrder`: Exposes CRUD operations for the **LegoOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegoOrders
    * const legoOrders = await prisma.legoOrder.findMany()
    * ```
    */
  get legoOrder(): Prisma.LegoOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legoFigure`: Exposes CRUD operations for the **LegoFigure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegoFigures
    * const legoFigures = await prisma.legoFigure.findMany()
    * ```
    */
  get legoFigure(): Prisma.LegoFigureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    LegoOrder: 'LegoOrder',
    LegoFigure: 'LegoFigure'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "legoOrder" | "legoFigure"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      LegoOrder: {
        payload: Prisma.$LegoOrderPayload<ExtArgs>
        fields: Prisma.LegoOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegoOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegoOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          findFirst: {
            args: Prisma.LegoOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegoOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          findMany: {
            args: Prisma.LegoOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>[]
          }
          create: {
            args: Prisma.LegoOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          createMany: {
            args: Prisma.LegoOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegoOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>[]
          }
          delete: {
            args: Prisma.LegoOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          update: {
            args: Prisma.LegoOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          deleteMany: {
            args: Prisma.LegoOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegoOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegoOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>[]
          }
          upsert: {
            args: Prisma.LegoOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoOrderPayload>
          }
          aggregate: {
            args: Prisma.LegoOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegoOrder>
          }
          groupBy: {
            args: Prisma.LegoOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegoOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegoOrderCountArgs<ExtArgs>
            result: $Utils.Optional<LegoOrderCountAggregateOutputType> | number
          }
        }
      }
      LegoFigure: {
        payload: Prisma.$LegoFigurePayload<ExtArgs>
        fields: Prisma.LegoFigureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegoFigureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegoFigureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          findFirst: {
            args: Prisma.LegoFigureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegoFigureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          findMany: {
            args: Prisma.LegoFigureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>[]
          }
          create: {
            args: Prisma.LegoFigureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          createMany: {
            args: Prisma.LegoFigureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegoFigureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>[]
          }
          delete: {
            args: Prisma.LegoFigureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          update: {
            args: Prisma.LegoFigureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          deleteMany: {
            args: Prisma.LegoFigureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegoFigureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegoFigureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>[]
          }
          upsert: {
            args: Prisma.LegoFigureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegoFigurePayload>
          }
          aggregate: {
            args: Prisma.LegoFigureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegoFigure>
          }
          groupBy: {
            args: Prisma.LegoFigureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegoFigureGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegoFigureCountArgs<ExtArgs>
            result: $Utils.Optional<LegoFigureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    legoOrder?: LegoOrderOmit
    legoFigure?: LegoFigureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LegoOrderCountOutputType
   */

  export type LegoOrderCountOutputType = {
    figures: number
  }

  export type LegoOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figures?: boolean | LegoOrderCountOutputTypeCountFiguresArgs
  }

  // Custom InputTypes
  /**
   * LegoOrderCountOutputType without action
   */
  export type LegoOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrderCountOutputType
     */
    select?: LegoOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LegoOrderCountOutputType without action
   */
  export type LegoOrderCountOutputTypeCountFiguresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegoFigureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model LegoOrder
   */

  export type AggregateLegoOrder = {
    _count: LegoOrderCountAggregateOutputType | null
    _avg: LegoOrderAvgAggregateOutputType | null
    _sum: LegoOrderSumAggregateOutputType | null
    _min: LegoOrderMinAggregateOutputType | null
    _max: LegoOrderMaxAggregateOutputType | null
  }

  export type LegoOrderAvgAggregateOutputType = {
    id: number | null
    planPrice: number | null
    totalPrice: number | null
    extraAccessoriesCount: number | null
  }

  export type LegoOrderSumAggregateOutputType = {
    id: number | null
    planPrice: number | null
    totalPrice: number | null
    extraAccessoriesCount: number | null
  }

  export type LegoOrderMinAggregateOutputType = {
    id: number | null
    planType: string | null
    planName: string | null
    planPrice: number | null
    totalPrice: number | null
    extraAccessoriesCount: number | null
    status: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerRut: string | null
    customerRegion: string | null
    customerComuna: string | null
    customerAddress: string | null
    customerNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegoOrderMaxAggregateOutputType = {
    id: number | null
    planType: string | null
    planName: string | null
    planPrice: number | null
    totalPrice: number | null
    extraAccessoriesCount: number | null
    status: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerRut: string | null
    customerRegion: string | null
    customerComuna: string | null
    customerAddress: string | null
    customerNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegoOrderCountAggregateOutputType = {
    id: number
    planType: number
    planName: number
    planPrice: number
    totalPrice: number
    extraAccessoriesCount: number
    status: number
    customerName: number
    customerEmail: number
    customerPhone: number
    customerRut: number
    customerRegion: number
    customerComuna: number
    customerAddress: number
    customerNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegoOrderAvgAggregateInputType = {
    id?: true
    planPrice?: true
    totalPrice?: true
    extraAccessoriesCount?: true
  }

  export type LegoOrderSumAggregateInputType = {
    id?: true
    planPrice?: true
    totalPrice?: true
    extraAccessoriesCount?: true
  }

  export type LegoOrderMinAggregateInputType = {
    id?: true
    planType?: true
    planName?: true
    planPrice?: true
    totalPrice?: true
    extraAccessoriesCount?: true
    status?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerRut?: true
    customerRegion?: true
    customerComuna?: true
    customerAddress?: true
    customerNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegoOrderMaxAggregateInputType = {
    id?: true
    planType?: true
    planName?: true
    planPrice?: true
    totalPrice?: true
    extraAccessoriesCount?: true
    status?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerRut?: true
    customerRegion?: true
    customerComuna?: true
    customerAddress?: true
    customerNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegoOrderCountAggregateInputType = {
    id?: true
    planType?: true
    planName?: true
    planPrice?: true
    totalPrice?: true
    extraAccessoriesCount?: true
    status?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerRut?: true
    customerRegion?: true
    customerComuna?: true
    customerAddress?: true
    customerNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegoOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegoOrder to aggregate.
     */
    where?: LegoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoOrders to fetch.
     */
    orderBy?: LegoOrderOrderByWithRelationInput | LegoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegoOrders
    **/
    _count?: true | LegoOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegoOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegoOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegoOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegoOrderMaxAggregateInputType
  }

  export type GetLegoOrderAggregateType<T extends LegoOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateLegoOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegoOrder[P]>
      : GetScalarType<T[P], AggregateLegoOrder[P]>
  }




  export type LegoOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegoOrderWhereInput
    orderBy?: LegoOrderOrderByWithAggregationInput | LegoOrderOrderByWithAggregationInput[]
    by: LegoOrderScalarFieldEnum[] | LegoOrderScalarFieldEnum
    having?: LegoOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegoOrderCountAggregateInputType | true
    _avg?: LegoOrderAvgAggregateInputType
    _sum?: LegoOrderSumAggregateInputType
    _min?: LegoOrderMinAggregateInputType
    _max?: LegoOrderMaxAggregateInputType
  }

  export type LegoOrderGroupByOutputType = {
    id: number
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount: number
    status: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress: string | null
    customerNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: LegoOrderCountAggregateOutputType | null
    _avg: LegoOrderAvgAggregateOutputType | null
    _sum: LegoOrderSumAggregateOutputType | null
    _min: LegoOrderMinAggregateOutputType | null
    _max: LegoOrderMaxAggregateOutputType | null
  }

  type GetLegoOrderGroupByPayload<T extends LegoOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegoOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegoOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegoOrderGroupByOutputType[P]>
            : GetScalarType<T[P], LegoOrderGroupByOutputType[P]>
        }
      >
    >


  export type LegoOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    planName?: boolean
    planPrice?: boolean
    totalPrice?: boolean
    extraAccessoriesCount?: boolean
    status?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerRut?: boolean
    customerRegion?: boolean
    customerComuna?: boolean
    customerAddress?: boolean
    customerNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    figures?: boolean | LegoOrder$figuresArgs<ExtArgs>
    _count?: boolean | LegoOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legoOrder"]>

  export type LegoOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    planName?: boolean
    planPrice?: boolean
    totalPrice?: boolean
    extraAccessoriesCount?: boolean
    status?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerRut?: boolean
    customerRegion?: boolean
    customerComuna?: boolean
    customerAddress?: boolean
    customerNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["legoOrder"]>

  export type LegoOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    planName?: boolean
    planPrice?: boolean
    totalPrice?: boolean
    extraAccessoriesCount?: boolean
    status?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerRut?: boolean
    customerRegion?: boolean
    customerComuna?: boolean
    customerAddress?: boolean
    customerNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["legoOrder"]>

  export type LegoOrderSelectScalar = {
    id?: boolean
    planType?: boolean
    planName?: boolean
    planPrice?: boolean
    totalPrice?: boolean
    extraAccessoriesCount?: boolean
    status?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerRut?: boolean
    customerRegion?: boolean
    customerComuna?: boolean
    customerAddress?: boolean
    customerNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LegoOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planType" | "planName" | "planPrice" | "totalPrice" | "extraAccessoriesCount" | "status" | "customerName" | "customerEmail" | "customerPhone" | "customerRut" | "customerRegion" | "customerComuna" | "customerAddress" | "customerNote" | "createdAt" | "updatedAt", ExtArgs["result"]["legoOrder"]>
  export type LegoOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figures?: boolean | LegoOrder$figuresArgs<ExtArgs>
    _count?: boolean | LegoOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LegoOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LegoOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LegoOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegoOrder"
    objects: {
      figures: Prisma.$LegoFigurePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planType: string
      planName: string
      planPrice: number
      totalPrice: number
      extraAccessoriesCount: number
      status: string
      customerName: string
      customerEmail: string
      customerPhone: string
      customerRut: string
      customerRegion: string
      customerComuna: string
      customerAddress: string | null
      customerNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legoOrder"]>
    composites: {}
  }

  type LegoOrderGetPayload<S extends boolean | null | undefined | LegoOrderDefaultArgs> = $Result.GetResult<Prisma.$LegoOrderPayload, S>

  type LegoOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegoOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegoOrderCountAggregateInputType | true
    }

  export interface LegoOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegoOrder'], meta: { name: 'LegoOrder' } }
    /**
     * Find zero or one LegoOrder that matches the filter.
     * @param {LegoOrderFindUniqueArgs} args - Arguments to find a LegoOrder
     * @example
     * // Get one LegoOrder
     * const legoOrder = await prisma.legoOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegoOrderFindUniqueArgs>(args: SelectSubset<T, LegoOrderFindUniqueArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegoOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegoOrderFindUniqueOrThrowArgs} args - Arguments to find a LegoOrder
     * @example
     * // Get one LegoOrder
     * const legoOrder = await prisma.legoOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegoOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, LegoOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegoOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderFindFirstArgs} args - Arguments to find a LegoOrder
     * @example
     * // Get one LegoOrder
     * const legoOrder = await prisma.legoOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegoOrderFindFirstArgs>(args?: SelectSubset<T, LegoOrderFindFirstArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegoOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderFindFirstOrThrowArgs} args - Arguments to find a LegoOrder
     * @example
     * // Get one LegoOrder
     * const legoOrder = await prisma.legoOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegoOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, LegoOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegoOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegoOrders
     * const legoOrders = await prisma.legoOrder.findMany()
     * 
     * // Get first 10 LegoOrders
     * const legoOrders = await prisma.legoOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legoOrderWithIdOnly = await prisma.legoOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegoOrderFindManyArgs>(args?: SelectSubset<T, LegoOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegoOrder.
     * @param {LegoOrderCreateArgs} args - Arguments to create a LegoOrder.
     * @example
     * // Create one LegoOrder
     * const LegoOrder = await prisma.legoOrder.create({
     *   data: {
     *     // ... data to create a LegoOrder
     *   }
     * })
     * 
     */
    create<T extends LegoOrderCreateArgs>(args: SelectSubset<T, LegoOrderCreateArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegoOrders.
     * @param {LegoOrderCreateManyArgs} args - Arguments to create many LegoOrders.
     * @example
     * // Create many LegoOrders
     * const legoOrder = await prisma.legoOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegoOrderCreateManyArgs>(args?: SelectSubset<T, LegoOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegoOrders and returns the data saved in the database.
     * @param {LegoOrderCreateManyAndReturnArgs} args - Arguments to create many LegoOrders.
     * @example
     * // Create many LegoOrders
     * const legoOrder = await prisma.legoOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegoOrders and only return the `id`
     * const legoOrderWithIdOnly = await prisma.legoOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegoOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, LegoOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegoOrder.
     * @param {LegoOrderDeleteArgs} args - Arguments to delete one LegoOrder.
     * @example
     * // Delete one LegoOrder
     * const LegoOrder = await prisma.legoOrder.delete({
     *   where: {
     *     // ... filter to delete one LegoOrder
     *   }
     * })
     * 
     */
    delete<T extends LegoOrderDeleteArgs>(args: SelectSubset<T, LegoOrderDeleteArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegoOrder.
     * @param {LegoOrderUpdateArgs} args - Arguments to update one LegoOrder.
     * @example
     * // Update one LegoOrder
     * const legoOrder = await prisma.legoOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegoOrderUpdateArgs>(args: SelectSubset<T, LegoOrderUpdateArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegoOrders.
     * @param {LegoOrderDeleteManyArgs} args - Arguments to filter LegoOrders to delete.
     * @example
     * // Delete a few LegoOrders
     * const { count } = await prisma.legoOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegoOrderDeleteManyArgs>(args?: SelectSubset<T, LegoOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegoOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegoOrders
     * const legoOrder = await prisma.legoOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegoOrderUpdateManyArgs>(args: SelectSubset<T, LegoOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegoOrders and returns the data updated in the database.
     * @param {LegoOrderUpdateManyAndReturnArgs} args - Arguments to update many LegoOrders.
     * @example
     * // Update many LegoOrders
     * const legoOrder = await prisma.legoOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegoOrders and only return the `id`
     * const legoOrderWithIdOnly = await prisma.legoOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LegoOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, LegoOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegoOrder.
     * @param {LegoOrderUpsertArgs} args - Arguments to update or create a LegoOrder.
     * @example
     * // Update or create a LegoOrder
     * const legoOrder = await prisma.legoOrder.upsert({
     *   create: {
     *     // ... data to create a LegoOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegoOrder we want to update
     *   }
     * })
     */
    upsert<T extends LegoOrderUpsertArgs>(args: SelectSubset<T, LegoOrderUpsertArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegoOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderCountArgs} args - Arguments to filter LegoOrders to count.
     * @example
     * // Count the number of LegoOrders
     * const count = await prisma.legoOrder.count({
     *   where: {
     *     // ... the filter for the LegoOrders we want to count
     *   }
     * })
    **/
    count<T extends LegoOrderCountArgs>(
      args?: Subset<T, LegoOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegoOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegoOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegoOrderAggregateArgs>(args: Subset<T, LegoOrderAggregateArgs>): Prisma.PrismaPromise<GetLegoOrderAggregateType<T>>

    /**
     * Group by LegoOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegoOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegoOrderGroupByArgs['orderBy'] }
        : { orderBy?: LegoOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegoOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegoOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegoOrder model
   */
  readonly fields: LegoOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegoOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegoOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    figures<T extends LegoOrder$figuresArgs<ExtArgs> = {}>(args?: Subset<T, LegoOrder$figuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegoOrder model
   */
  interface LegoOrderFieldRefs {
    readonly id: FieldRef<"LegoOrder", 'Int'>
    readonly planType: FieldRef<"LegoOrder", 'String'>
    readonly planName: FieldRef<"LegoOrder", 'String'>
    readonly planPrice: FieldRef<"LegoOrder", 'Int'>
    readonly totalPrice: FieldRef<"LegoOrder", 'Int'>
    readonly extraAccessoriesCount: FieldRef<"LegoOrder", 'Int'>
    readonly status: FieldRef<"LegoOrder", 'String'>
    readonly customerName: FieldRef<"LegoOrder", 'String'>
    readonly customerEmail: FieldRef<"LegoOrder", 'String'>
    readonly customerPhone: FieldRef<"LegoOrder", 'String'>
    readonly customerRut: FieldRef<"LegoOrder", 'String'>
    readonly customerRegion: FieldRef<"LegoOrder", 'String'>
    readonly customerComuna: FieldRef<"LegoOrder", 'String'>
    readonly customerAddress: FieldRef<"LegoOrder", 'String'>
    readonly customerNote: FieldRef<"LegoOrder", 'String'>
    readonly createdAt: FieldRef<"LegoOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"LegoOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LegoOrder findUnique
   */
  export type LegoOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter, which LegoOrder to fetch.
     */
    where: LegoOrderWhereUniqueInput
  }

  /**
   * LegoOrder findUniqueOrThrow
   */
  export type LegoOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter, which LegoOrder to fetch.
     */
    where: LegoOrderWhereUniqueInput
  }

  /**
   * LegoOrder findFirst
   */
  export type LegoOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter, which LegoOrder to fetch.
     */
    where?: LegoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoOrders to fetch.
     */
    orderBy?: LegoOrderOrderByWithRelationInput | LegoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegoOrders.
     */
    cursor?: LegoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegoOrders.
     */
    distinct?: LegoOrderScalarFieldEnum | LegoOrderScalarFieldEnum[]
  }

  /**
   * LegoOrder findFirstOrThrow
   */
  export type LegoOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter, which LegoOrder to fetch.
     */
    where?: LegoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoOrders to fetch.
     */
    orderBy?: LegoOrderOrderByWithRelationInput | LegoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegoOrders.
     */
    cursor?: LegoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegoOrders.
     */
    distinct?: LegoOrderScalarFieldEnum | LegoOrderScalarFieldEnum[]
  }

  /**
   * LegoOrder findMany
   */
  export type LegoOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter, which LegoOrders to fetch.
     */
    where?: LegoOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoOrders to fetch.
     */
    orderBy?: LegoOrderOrderByWithRelationInput | LegoOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegoOrders.
     */
    cursor?: LegoOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoOrders.
     */
    skip?: number
    distinct?: LegoOrderScalarFieldEnum | LegoOrderScalarFieldEnum[]
  }

  /**
   * LegoOrder create
   */
  export type LegoOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a LegoOrder.
     */
    data: XOR<LegoOrderCreateInput, LegoOrderUncheckedCreateInput>
  }

  /**
   * LegoOrder createMany
   */
  export type LegoOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegoOrders.
     */
    data: LegoOrderCreateManyInput | LegoOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegoOrder createManyAndReturn
   */
  export type LegoOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * The data used to create many LegoOrders.
     */
    data: LegoOrderCreateManyInput | LegoOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegoOrder update
   */
  export type LegoOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a LegoOrder.
     */
    data: XOR<LegoOrderUpdateInput, LegoOrderUncheckedUpdateInput>
    /**
     * Choose, which LegoOrder to update.
     */
    where: LegoOrderWhereUniqueInput
  }

  /**
   * LegoOrder updateMany
   */
  export type LegoOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegoOrders.
     */
    data: XOR<LegoOrderUpdateManyMutationInput, LegoOrderUncheckedUpdateManyInput>
    /**
     * Filter which LegoOrders to update
     */
    where?: LegoOrderWhereInput
    /**
     * Limit how many LegoOrders to update.
     */
    limit?: number
  }

  /**
   * LegoOrder updateManyAndReturn
   */
  export type LegoOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * The data used to update LegoOrders.
     */
    data: XOR<LegoOrderUpdateManyMutationInput, LegoOrderUncheckedUpdateManyInput>
    /**
     * Filter which LegoOrders to update
     */
    where?: LegoOrderWhereInput
    /**
     * Limit how many LegoOrders to update.
     */
    limit?: number
  }

  /**
   * LegoOrder upsert
   */
  export type LegoOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the LegoOrder to update in case it exists.
     */
    where: LegoOrderWhereUniqueInput
    /**
     * In case the LegoOrder found by the `where` argument doesn't exist, create a new LegoOrder with this data.
     */
    create: XOR<LegoOrderCreateInput, LegoOrderUncheckedCreateInput>
    /**
     * In case the LegoOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegoOrderUpdateInput, LegoOrderUncheckedUpdateInput>
  }

  /**
   * LegoOrder delete
   */
  export type LegoOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
    /**
     * Filter which LegoOrder to delete.
     */
    where: LegoOrderWhereUniqueInput
  }

  /**
   * LegoOrder deleteMany
   */
  export type LegoOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegoOrders to delete
     */
    where?: LegoOrderWhereInput
    /**
     * Limit how many LegoOrders to delete.
     */
    limit?: number
  }

  /**
   * LegoOrder.figures
   */
  export type LegoOrder$figuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    where?: LegoFigureWhereInput
    orderBy?: LegoFigureOrderByWithRelationInput | LegoFigureOrderByWithRelationInput[]
    cursor?: LegoFigureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegoFigureScalarFieldEnum | LegoFigureScalarFieldEnum[]
  }

  /**
   * LegoOrder without action
   */
  export type LegoOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoOrder
     */
    select?: LegoOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoOrder
     */
    omit?: LegoOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoOrderInclude<ExtArgs> | null
  }


  /**
   * Model LegoFigure
   */

  export type AggregateLegoFigure = {
    _count: LegoFigureCountAggregateOutputType | null
    _avg: LegoFigureAvgAggregateOutputType | null
    _sum: LegoFigureSumAggregateOutputType | null
    _min: LegoFigureMinAggregateOutputType | null
    _max: LegoFigureMaxAggregateOutputType | null
  }

  export type LegoFigureAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    figureNumber: number | null
    hairId: number | null
    faceId: number | null
    bodyId: number | null
    legsId: number | null
  }

  export type LegoFigureSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    figureNumber: number | null
    hairId: number | null
    faceId: number | null
    bodyId: number | null
    legsId: number | null
  }

  export type LegoFigureMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    figureNumber: number | null
    hairId: number | null
    faceId: number | null
    bodyId: number | null
    legsId: number | null
    accessories: string | null
    createdAt: Date | null
  }

  export type LegoFigureMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    figureNumber: number | null
    hairId: number | null
    faceId: number | null
    bodyId: number | null
    legsId: number | null
    accessories: string | null
    createdAt: Date | null
  }

  export type LegoFigureCountAggregateOutputType = {
    id: number
    orderId: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: number
    createdAt: number
    _all: number
  }


  export type LegoFigureAvgAggregateInputType = {
    id?: true
    orderId?: true
    figureNumber?: true
    hairId?: true
    faceId?: true
    bodyId?: true
    legsId?: true
  }

  export type LegoFigureSumAggregateInputType = {
    id?: true
    orderId?: true
    figureNumber?: true
    hairId?: true
    faceId?: true
    bodyId?: true
    legsId?: true
  }

  export type LegoFigureMinAggregateInputType = {
    id?: true
    orderId?: true
    figureNumber?: true
    hairId?: true
    faceId?: true
    bodyId?: true
    legsId?: true
    accessories?: true
    createdAt?: true
  }

  export type LegoFigureMaxAggregateInputType = {
    id?: true
    orderId?: true
    figureNumber?: true
    hairId?: true
    faceId?: true
    bodyId?: true
    legsId?: true
    accessories?: true
    createdAt?: true
  }

  export type LegoFigureCountAggregateInputType = {
    id?: true
    orderId?: true
    figureNumber?: true
    hairId?: true
    faceId?: true
    bodyId?: true
    legsId?: true
    accessories?: true
    createdAt?: true
    _all?: true
  }

  export type LegoFigureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegoFigure to aggregate.
     */
    where?: LegoFigureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoFigures to fetch.
     */
    orderBy?: LegoFigureOrderByWithRelationInput | LegoFigureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegoFigureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoFigures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoFigures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegoFigures
    **/
    _count?: true | LegoFigureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegoFigureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegoFigureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegoFigureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegoFigureMaxAggregateInputType
  }

  export type GetLegoFigureAggregateType<T extends LegoFigureAggregateArgs> = {
        [P in keyof T & keyof AggregateLegoFigure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegoFigure[P]>
      : GetScalarType<T[P], AggregateLegoFigure[P]>
  }




  export type LegoFigureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegoFigureWhereInput
    orderBy?: LegoFigureOrderByWithAggregationInput | LegoFigureOrderByWithAggregationInput[]
    by: LegoFigureScalarFieldEnum[] | LegoFigureScalarFieldEnum
    having?: LegoFigureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegoFigureCountAggregateInputType | true
    _avg?: LegoFigureAvgAggregateInputType
    _sum?: LegoFigureSumAggregateInputType
    _min?: LegoFigureMinAggregateInputType
    _max?: LegoFigureMaxAggregateInputType
  }

  export type LegoFigureGroupByOutputType = {
    id: number
    orderId: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt: Date
    _count: LegoFigureCountAggregateOutputType | null
    _avg: LegoFigureAvgAggregateOutputType | null
    _sum: LegoFigureSumAggregateOutputType | null
    _min: LegoFigureMinAggregateOutputType | null
    _max: LegoFigureMaxAggregateOutputType | null
  }

  type GetLegoFigureGroupByPayload<T extends LegoFigureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegoFigureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegoFigureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegoFigureGroupByOutputType[P]>
            : GetScalarType<T[P], LegoFigureGroupByOutputType[P]>
        }
      >
    >


  export type LegoFigureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    figureNumber?: boolean
    hairId?: boolean
    faceId?: boolean
    bodyId?: boolean
    legsId?: boolean
    accessories?: boolean
    createdAt?: boolean
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legoFigure"]>

  export type LegoFigureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    figureNumber?: boolean
    hairId?: boolean
    faceId?: boolean
    bodyId?: boolean
    legsId?: boolean
    accessories?: boolean
    createdAt?: boolean
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legoFigure"]>

  export type LegoFigureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    figureNumber?: boolean
    hairId?: boolean
    faceId?: boolean
    bodyId?: boolean
    legsId?: boolean
    accessories?: boolean
    createdAt?: boolean
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legoFigure"]>

  export type LegoFigureSelectScalar = {
    id?: boolean
    orderId?: boolean
    figureNumber?: boolean
    hairId?: boolean
    faceId?: boolean
    bodyId?: boolean
    legsId?: boolean
    accessories?: boolean
    createdAt?: boolean
  }

  export type LegoFigureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "figureNumber" | "hairId" | "faceId" | "bodyId" | "legsId" | "accessories" | "createdAt", ExtArgs["result"]["legoFigure"]>
  export type LegoFigureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }
  export type LegoFigureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }
  export type LegoFigureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | LegoOrderDefaultArgs<ExtArgs>
  }

  export type $LegoFigurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegoFigure"
    objects: {
      order: Prisma.$LegoOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      figureNumber: number
      hairId: number
      faceId: number
      bodyId: number
      legsId: number
      accessories: string
      createdAt: Date
    }, ExtArgs["result"]["legoFigure"]>
    composites: {}
  }

  type LegoFigureGetPayload<S extends boolean | null | undefined | LegoFigureDefaultArgs> = $Result.GetResult<Prisma.$LegoFigurePayload, S>

  type LegoFigureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegoFigureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegoFigureCountAggregateInputType | true
    }

  export interface LegoFigureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegoFigure'], meta: { name: 'LegoFigure' } }
    /**
     * Find zero or one LegoFigure that matches the filter.
     * @param {LegoFigureFindUniqueArgs} args - Arguments to find a LegoFigure
     * @example
     * // Get one LegoFigure
     * const legoFigure = await prisma.legoFigure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegoFigureFindUniqueArgs>(args: SelectSubset<T, LegoFigureFindUniqueArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegoFigure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegoFigureFindUniqueOrThrowArgs} args - Arguments to find a LegoFigure
     * @example
     * // Get one LegoFigure
     * const legoFigure = await prisma.legoFigure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegoFigureFindUniqueOrThrowArgs>(args: SelectSubset<T, LegoFigureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegoFigure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureFindFirstArgs} args - Arguments to find a LegoFigure
     * @example
     * // Get one LegoFigure
     * const legoFigure = await prisma.legoFigure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegoFigureFindFirstArgs>(args?: SelectSubset<T, LegoFigureFindFirstArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegoFigure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureFindFirstOrThrowArgs} args - Arguments to find a LegoFigure
     * @example
     * // Get one LegoFigure
     * const legoFigure = await prisma.legoFigure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegoFigureFindFirstOrThrowArgs>(args?: SelectSubset<T, LegoFigureFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegoFigures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegoFigures
     * const legoFigures = await prisma.legoFigure.findMany()
     * 
     * // Get first 10 LegoFigures
     * const legoFigures = await prisma.legoFigure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legoFigureWithIdOnly = await prisma.legoFigure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegoFigureFindManyArgs>(args?: SelectSubset<T, LegoFigureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegoFigure.
     * @param {LegoFigureCreateArgs} args - Arguments to create a LegoFigure.
     * @example
     * // Create one LegoFigure
     * const LegoFigure = await prisma.legoFigure.create({
     *   data: {
     *     // ... data to create a LegoFigure
     *   }
     * })
     * 
     */
    create<T extends LegoFigureCreateArgs>(args: SelectSubset<T, LegoFigureCreateArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegoFigures.
     * @param {LegoFigureCreateManyArgs} args - Arguments to create many LegoFigures.
     * @example
     * // Create many LegoFigures
     * const legoFigure = await prisma.legoFigure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegoFigureCreateManyArgs>(args?: SelectSubset<T, LegoFigureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegoFigures and returns the data saved in the database.
     * @param {LegoFigureCreateManyAndReturnArgs} args - Arguments to create many LegoFigures.
     * @example
     * // Create many LegoFigures
     * const legoFigure = await prisma.legoFigure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegoFigures and only return the `id`
     * const legoFigureWithIdOnly = await prisma.legoFigure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegoFigureCreateManyAndReturnArgs>(args?: SelectSubset<T, LegoFigureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegoFigure.
     * @param {LegoFigureDeleteArgs} args - Arguments to delete one LegoFigure.
     * @example
     * // Delete one LegoFigure
     * const LegoFigure = await prisma.legoFigure.delete({
     *   where: {
     *     // ... filter to delete one LegoFigure
     *   }
     * })
     * 
     */
    delete<T extends LegoFigureDeleteArgs>(args: SelectSubset<T, LegoFigureDeleteArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegoFigure.
     * @param {LegoFigureUpdateArgs} args - Arguments to update one LegoFigure.
     * @example
     * // Update one LegoFigure
     * const legoFigure = await prisma.legoFigure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegoFigureUpdateArgs>(args: SelectSubset<T, LegoFigureUpdateArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegoFigures.
     * @param {LegoFigureDeleteManyArgs} args - Arguments to filter LegoFigures to delete.
     * @example
     * // Delete a few LegoFigures
     * const { count } = await prisma.legoFigure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegoFigureDeleteManyArgs>(args?: SelectSubset<T, LegoFigureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegoFigures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegoFigures
     * const legoFigure = await prisma.legoFigure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegoFigureUpdateManyArgs>(args: SelectSubset<T, LegoFigureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegoFigures and returns the data updated in the database.
     * @param {LegoFigureUpdateManyAndReturnArgs} args - Arguments to update many LegoFigures.
     * @example
     * // Update many LegoFigures
     * const legoFigure = await prisma.legoFigure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegoFigures and only return the `id`
     * const legoFigureWithIdOnly = await prisma.legoFigure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LegoFigureUpdateManyAndReturnArgs>(args: SelectSubset<T, LegoFigureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegoFigure.
     * @param {LegoFigureUpsertArgs} args - Arguments to update or create a LegoFigure.
     * @example
     * // Update or create a LegoFigure
     * const legoFigure = await prisma.legoFigure.upsert({
     *   create: {
     *     // ... data to create a LegoFigure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegoFigure we want to update
     *   }
     * })
     */
    upsert<T extends LegoFigureUpsertArgs>(args: SelectSubset<T, LegoFigureUpsertArgs<ExtArgs>>): Prisma__LegoFigureClient<$Result.GetResult<Prisma.$LegoFigurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegoFigures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureCountArgs} args - Arguments to filter LegoFigures to count.
     * @example
     * // Count the number of LegoFigures
     * const count = await prisma.legoFigure.count({
     *   where: {
     *     // ... the filter for the LegoFigures we want to count
     *   }
     * })
    **/
    count<T extends LegoFigureCountArgs>(
      args?: Subset<T, LegoFigureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegoFigureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegoFigure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegoFigureAggregateArgs>(args: Subset<T, LegoFigureAggregateArgs>): Prisma.PrismaPromise<GetLegoFigureAggregateType<T>>

    /**
     * Group by LegoFigure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegoFigureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegoFigureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegoFigureGroupByArgs['orderBy'] }
        : { orderBy?: LegoFigureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegoFigureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegoFigureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegoFigure model
   */
  readonly fields: LegoFigureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegoFigure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegoFigureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends LegoOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegoOrderDefaultArgs<ExtArgs>>): Prisma__LegoOrderClient<$Result.GetResult<Prisma.$LegoOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegoFigure model
   */
  interface LegoFigureFieldRefs {
    readonly id: FieldRef<"LegoFigure", 'Int'>
    readonly orderId: FieldRef<"LegoFigure", 'Int'>
    readonly figureNumber: FieldRef<"LegoFigure", 'Int'>
    readonly hairId: FieldRef<"LegoFigure", 'Int'>
    readonly faceId: FieldRef<"LegoFigure", 'Int'>
    readonly bodyId: FieldRef<"LegoFigure", 'Int'>
    readonly legsId: FieldRef<"LegoFigure", 'Int'>
    readonly accessories: FieldRef<"LegoFigure", 'String'>
    readonly createdAt: FieldRef<"LegoFigure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LegoFigure findUnique
   */
  export type LegoFigureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter, which LegoFigure to fetch.
     */
    where: LegoFigureWhereUniqueInput
  }

  /**
   * LegoFigure findUniqueOrThrow
   */
  export type LegoFigureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter, which LegoFigure to fetch.
     */
    where: LegoFigureWhereUniqueInput
  }

  /**
   * LegoFigure findFirst
   */
  export type LegoFigureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter, which LegoFigure to fetch.
     */
    where?: LegoFigureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoFigures to fetch.
     */
    orderBy?: LegoFigureOrderByWithRelationInput | LegoFigureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegoFigures.
     */
    cursor?: LegoFigureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoFigures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoFigures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegoFigures.
     */
    distinct?: LegoFigureScalarFieldEnum | LegoFigureScalarFieldEnum[]
  }

  /**
   * LegoFigure findFirstOrThrow
   */
  export type LegoFigureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter, which LegoFigure to fetch.
     */
    where?: LegoFigureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoFigures to fetch.
     */
    orderBy?: LegoFigureOrderByWithRelationInput | LegoFigureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegoFigures.
     */
    cursor?: LegoFigureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoFigures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoFigures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegoFigures.
     */
    distinct?: LegoFigureScalarFieldEnum | LegoFigureScalarFieldEnum[]
  }

  /**
   * LegoFigure findMany
   */
  export type LegoFigureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter, which LegoFigures to fetch.
     */
    where?: LegoFigureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegoFigures to fetch.
     */
    orderBy?: LegoFigureOrderByWithRelationInput | LegoFigureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegoFigures.
     */
    cursor?: LegoFigureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegoFigures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegoFigures.
     */
    skip?: number
    distinct?: LegoFigureScalarFieldEnum | LegoFigureScalarFieldEnum[]
  }

  /**
   * LegoFigure create
   */
  export type LegoFigureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * The data needed to create a LegoFigure.
     */
    data: XOR<LegoFigureCreateInput, LegoFigureUncheckedCreateInput>
  }

  /**
   * LegoFigure createMany
   */
  export type LegoFigureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegoFigures.
     */
    data: LegoFigureCreateManyInput | LegoFigureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegoFigure createManyAndReturn
   */
  export type LegoFigureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * The data used to create many LegoFigures.
     */
    data: LegoFigureCreateManyInput | LegoFigureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegoFigure update
   */
  export type LegoFigureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * The data needed to update a LegoFigure.
     */
    data: XOR<LegoFigureUpdateInput, LegoFigureUncheckedUpdateInput>
    /**
     * Choose, which LegoFigure to update.
     */
    where: LegoFigureWhereUniqueInput
  }

  /**
   * LegoFigure updateMany
   */
  export type LegoFigureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegoFigures.
     */
    data: XOR<LegoFigureUpdateManyMutationInput, LegoFigureUncheckedUpdateManyInput>
    /**
     * Filter which LegoFigures to update
     */
    where?: LegoFigureWhereInput
    /**
     * Limit how many LegoFigures to update.
     */
    limit?: number
  }

  /**
   * LegoFigure updateManyAndReturn
   */
  export type LegoFigureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * The data used to update LegoFigures.
     */
    data: XOR<LegoFigureUpdateManyMutationInput, LegoFigureUncheckedUpdateManyInput>
    /**
     * Filter which LegoFigures to update
     */
    where?: LegoFigureWhereInput
    /**
     * Limit how many LegoFigures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegoFigure upsert
   */
  export type LegoFigureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * The filter to search for the LegoFigure to update in case it exists.
     */
    where: LegoFigureWhereUniqueInput
    /**
     * In case the LegoFigure found by the `where` argument doesn't exist, create a new LegoFigure with this data.
     */
    create: XOR<LegoFigureCreateInput, LegoFigureUncheckedCreateInput>
    /**
     * In case the LegoFigure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegoFigureUpdateInput, LegoFigureUncheckedUpdateInput>
  }

  /**
   * LegoFigure delete
   */
  export type LegoFigureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
    /**
     * Filter which LegoFigure to delete.
     */
    where: LegoFigureWhereUniqueInput
  }

  /**
   * LegoFigure deleteMany
   */
  export type LegoFigureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegoFigures to delete
     */
    where?: LegoFigureWhereInput
    /**
     * Limit how many LegoFigures to delete.
     */
    limit?: number
  }

  /**
   * LegoFigure without action
   */
  export type LegoFigureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegoFigure
     */
    select?: LegoFigureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegoFigure
     */
    omit?: LegoFigureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegoFigureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LegoOrderScalarFieldEnum: {
    id: 'id',
    planType: 'planType',
    planName: 'planName',
    planPrice: 'planPrice',
    totalPrice: 'totalPrice',
    extraAccessoriesCount: 'extraAccessoriesCount',
    status: 'status',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    customerRut: 'customerRut',
    customerRegion: 'customerRegion',
    customerComuna: 'customerComuna',
    customerAddress: 'customerAddress',
    customerNote: 'customerNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegoOrderScalarFieldEnum = (typeof LegoOrderScalarFieldEnum)[keyof typeof LegoOrderScalarFieldEnum]


  export const LegoFigureScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    figureNumber: 'figureNumber',
    hairId: 'hairId',
    faceId: 'faceId',
    bodyId: 'bodyId',
    legsId: 'legsId',
    accessories: 'accessories',
    createdAt: 'createdAt'
  };

  export type LegoFigureScalarFieldEnum = (typeof LegoFigureScalarFieldEnum)[keyof typeof LegoFigureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type LegoOrderWhereInput = {
    AND?: LegoOrderWhereInput | LegoOrderWhereInput[]
    OR?: LegoOrderWhereInput[]
    NOT?: LegoOrderWhereInput | LegoOrderWhereInput[]
    id?: IntFilter<"LegoOrder"> | number
    planType?: StringFilter<"LegoOrder"> | string
    planName?: StringFilter<"LegoOrder"> | string
    planPrice?: IntFilter<"LegoOrder"> | number
    totalPrice?: IntFilter<"LegoOrder"> | number
    extraAccessoriesCount?: IntFilter<"LegoOrder"> | number
    status?: StringFilter<"LegoOrder"> | string
    customerName?: StringFilter<"LegoOrder"> | string
    customerEmail?: StringFilter<"LegoOrder"> | string
    customerPhone?: StringFilter<"LegoOrder"> | string
    customerRut?: StringFilter<"LegoOrder"> | string
    customerRegion?: StringFilter<"LegoOrder"> | string
    customerComuna?: StringFilter<"LegoOrder"> | string
    customerAddress?: StringNullableFilter<"LegoOrder"> | string | null
    customerNote?: StringNullableFilter<"LegoOrder"> | string | null
    createdAt?: DateTimeFilter<"LegoOrder"> | Date | string
    updatedAt?: DateTimeFilter<"LegoOrder"> | Date | string
    figures?: LegoFigureListRelationFilter
  }

  export type LegoOrderOrderByWithRelationInput = {
    id?: SortOrder
    planType?: SortOrder
    planName?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerRut?: SortOrder
    customerRegion?: SortOrder
    customerComuna?: SortOrder
    customerAddress?: SortOrderInput | SortOrder
    customerNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    figures?: LegoFigureOrderByRelationAggregateInput
  }

  export type LegoOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LegoOrderWhereInput | LegoOrderWhereInput[]
    OR?: LegoOrderWhereInput[]
    NOT?: LegoOrderWhereInput | LegoOrderWhereInput[]
    planType?: StringFilter<"LegoOrder"> | string
    planName?: StringFilter<"LegoOrder"> | string
    planPrice?: IntFilter<"LegoOrder"> | number
    totalPrice?: IntFilter<"LegoOrder"> | number
    extraAccessoriesCount?: IntFilter<"LegoOrder"> | number
    status?: StringFilter<"LegoOrder"> | string
    customerName?: StringFilter<"LegoOrder"> | string
    customerEmail?: StringFilter<"LegoOrder"> | string
    customerPhone?: StringFilter<"LegoOrder"> | string
    customerRut?: StringFilter<"LegoOrder"> | string
    customerRegion?: StringFilter<"LegoOrder"> | string
    customerComuna?: StringFilter<"LegoOrder"> | string
    customerAddress?: StringNullableFilter<"LegoOrder"> | string | null
    customerNote?: StringNullableFilter<"LegoOrder"> | string | null
    createdAt?: DateTimeFilter<"LegoOrder"> | Date | string
    updatedAt?: DateTimeFilter<"LegoOrder"> | Date | string
    figures?: LegoFigureListRelationFilter
  }, "id">

  export type LegoOrderOrderByWithAggregationInput = {
    id?: SortOrder
    planType?: SortOrder
    planName?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerRut?: SortOrder
    customerRegion?: SortOrder
    customerComuna?: SortOrder
    customerAddress?: SortOrderInput | SortOrder
    customerNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegoOrderCountOrderByAggregateInput
    _avg?: LegoOrderAvgOrderByAggregateInput
    _max?: LegoOrderMaxOrderByAggregateInput
    _min?: LegoOrderMinOrderByAggregateInput
    _sum?: LegoOrderSumOrderByAggregateInput
  }

  export type LegoOrderScalarWhereWithAggregatesInput = {
    AND?: LegoOrderScalarWhereWithAggregatesInput | LegoOrderScalarWhereWithAggregatesInput[]
    OR?: LegoOrderScalarWhereWithAggregatesInput[]
    NOT?: LegoOrderScalarWhereWithAggregatesInput | LegoOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LegoOrder"> | number
    planType?: StringWithAggregatesFilter<"LegoOrder"> | string
    planName?: StringWithAggregatesFilter<"LegoOrder"> | string
    planPrice?: IntWithAggregatesFilter<"LegoOrder"> | number
    totalPrice?: IntWithAggregatesFilter<"LegoOrder"> | number
    extraAccessoriesCount?: IntWithAggregatesFilter<"LegoOrder"> | number
    status?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerName?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerEmail?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerPhone?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerRut?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerRegion?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerComuna?: StringWithAggregatesFilter<"LegoOrder"> | string
    customerAddress?: StringNullableWithAggregatesFilter<"LegoOrder"> | string | null
    customerNote?: StringNullableWithAggregatesFilter<"LegoOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LegoOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LegoOrder"> | Date | string
  }

  export type LegoFigureWhereInput = {
    AND?: LegoFigureWhereInput | LegoFigureWhereInput[]
    OR?: LegoFigureWhereInput[]
    NOT?: LegoFigureWhereInput | LegoFigureWhereInput[]
    id?: IntFilter<"LegoFigure"> | number
    orderId?: IntFilter<"LegoFigure"> | number
    figureNumber?: IntFilter<"LegoFigure"> | number
    hairId?: IntFilter<"LegoFigure"> | number
    faceId?: IntFilter<"LegoFigure"> | number
    bodyId?: IntFilter<"LegoFigure"> | number
    legsId?: IntFilter<"LegoFigure"> | number
    accessories?: StringFilter<"LegoFigure"> | string
    createdAt?: DateTimeFilter<"LegoFigure"> | Date | string
    order?: XOR<LegoOrderScalarRelationFilter, LegoOrderWhereInput>
  }

  export type LegoFigureOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
    accessories?: SortOrder
    createdAt?: SortOrder
    order?: LegoOrderOrderByWithRelationInput
  }

  export type LegoFigureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LegoFigureWhereInput | LegoFigureWhereInput[]
    OR?: LegoFigureWhereInput[]
    NOT?: LegoFigureWhereInput | LegoFigureWhereInput[]
    orderId?: IntFilter<"LegoFigure"> | number
    figureNumber?: IntFilter<"LegoFigure"> | number
    hairId?: IntFilter<"LegoFigure"> | number
    faceId?: IntFilter<"LegoFigure"> | number
    bodyId?: IntFilter<"LegoFigure"> | number
    legsId?: IntFilter<"LegoFigure"> | number
    accessories?: StringFilter<"LegoFigure"> | string
    createdAt?: DateTimeFilter<"LegoFigure"> | Date | string
    order?: XOR<LegoOrderScalarRelationFilter, LegoOrderWhereInput>
  }, "id">

  export type LegoFigureOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
    accessories?: SortOrder
    createdAt?: SortOrder
    _count?: LegoFigureCountOrderByAggregateInput
    _avg?: LegoFigureAvgOrderByAggregateInput
    _max?: LegoFigureMaxOrderByAggregateInput
    _min?: LegoFigureMinOrderByAggregateInput
    _sum?: LegoFigureSumOrderByAggregateInput
  }

  export type LegoFigureScalarWhereWithAggregatesInput = {
    AND?: LegoFigureScalarWhereWithAggregatesInput | LegoFigureScalarWhereWithAggregatesInput[]
    OR?: LegoFigureScalarWhereWithAggregatesInput[]
    NOT?: LegoFigureScalarWhereWithAggregatesInput | LegoFigureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LegoFigure"> | number
    orderId?: IntWithAggregatesFilter<"LegoFigure"> | number
    figureNumber?: IntWithAggregatesFilter<"LegoFigure"> | number
    hairId?: IntWithAggregatesFilter<"LegoFigure"> | number
    faceId?: IntWithAggregatesFilter<"LegoFigure"> | number
    bodyId?: IntWithAggregatesFilter<"LegoFigure"> | number
    legsId?: IntWithAggregatesFilter<"LegoFigure"> | number
    accessories?: StringWithAggregatesFilter<"LegoFigure"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LegoFigure"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoOrderCreateInput = {
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount?: number
    status?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress?: string | null
    customerNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    figures?: LegoFigureCreateNestedManyWithoutOrderInput
  }

  export type LegoOrderUncheckedCreateInput = {
    id?: number
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount?: number
    status?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress?: string | null
    customerNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    figures?: LegoFigureUncheckedCreateNestedManyWithoutOrderInput
  }

  export type LegoOrderUpdateInput = {
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    figures?: LegoFigureUpdateManyWithoutOrderNestedInput
  }

  export type LegoOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    figures?: LegoFigureUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type LegoOrderCreateManyInput = {
    id?: number
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount?: number
    status?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress?: string | null
    customerNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegoOrderUpdateManyMutationInput = {
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureCreateInput = {
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
    order: LegoOrderCreateNestedOneWithoutFiguresInput
  }

  export type LegoFigureUncheckedCreateInput = {
    id?: number
    orderId: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
  }

  export type LegoFigureUpdateInput = {
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: LegoOrderUpdateOneRequiredWithoutFiguresNestedInput
  }

  export type LegoFigureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureCreateManyInput = {
    id?: number
    orderId: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
  }

  export type LegoFigureUpdateManyMutationInput = {
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LegoFigureListRelationFilter = {
    every?: LegoFigureWhereInput
    some?: LegoFigureWhereInput
    none?: LegoFigureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LegoFigureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegoOrderCountOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    planName?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerRut?: SortOrder
    customerRegion?: SortOrder
    customerComuna?: SortOrder
    customerAddress?: SortOrder
    customerNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegoOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
  }

  export type LegoOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    planName?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerRut?: SortOrder
    customerRegion?: SortOrder
    customerComuna?: SortOrder
    customerAddress?: SortOrder
    customerNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegoOrderMinOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    planName?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerRut?: SortOrder
    customerRegion?: SortOrder
    customerComuna?: SortOrder
    customerAddress?: SortOrder
    customerNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegoOrderSumOrderByAggregateInput = {
    id?: SortOrder
    planPrice?: SortOrder
    totalPrice?: SortOrder
    extraAccessoriesCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LegoOrderScalarRelationFilter = {
    is?: LegoOrderWhereInput
    isNot?: LegoOrderWhereInput
  }

  export type LegoFigureCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
    accessories?: SortOrder
    createdAt?: SortOrder
  }

  export type LegoFigureAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
  }

  export type LegoFigureMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
    accessories?: SortOrder
    createdAt?: SortOrder
  }

  export type LegoFigureMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
    accessories?: SortOrder
    createdAt?: SortOrder
  }

  export type LegoFigureSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    figureNumber?: SortOrder
    hairId?: SortOrder
    faceId?: SortOrder
    bodyId?: SortOrder
    legsId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LegoFigureCreateNestedManyWithoutOrderInput = {
    create?: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput> | LegoFigureCreateWithoutOrderInput[] | LegoFigureUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LegoFigureCreateOrConnectWithoutOrderInput | LegoFigureCreateOrConnectWithoutOrderInput[]
    createMany?: LegoFigureCreateManyOrderInputEnvelope
    connect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
  }

  export type LegoFigureUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput> | LegoFigureCreateWithoutOrderInput[] | LegoFigureUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LegoFigureCreateOrConnectWithoutOrderInput | LegoFigureCreateOrConnectWithoutOrderInput[]
    createMany?: LegoFigureCreateManyOrderInputEnvelope
    connect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LegoFigureUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput> | LegoFigureCreateWithoutOrderInput[] | LegoFigureUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LegoFigureCreateOrConnectWithoutOrderInput | LegoFigureCreateOrConnectWithoutOrderInput[]
    upsert?: LegoFigureUpsertWithWhereUniqueWithoutOrderInput | LegoFigureUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LegoFigureCreateManyOrderInputEnvelope
    set?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    disconnect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    delete?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    connect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    update?: LegoFigureUpdateWithWhereUniqueWithoutOrderInput | LegoFigureUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LegoFigureUpdateManyWithWhereWithoutOrderInput | LegoFigureUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LegoFigureScalarWhereInput | LegoFigureScalarWhereInput[]
  }

  export type LegoFigureUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput> | LegoFigureCreateWithoutOrderInput[] | LegoFigureUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LegoFigureCreateOrConnectWithoutOrderInput | LegoFigureCreateOrConnectWithoutOrderInput[]
    upsert?: LegoFigureUpsertWithWhereUniqueWithoutOrderInput | LegoFigureUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LegoFigureCreateManyOrderInputEnvelope
    set?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    disconnect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    delete?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    connect?: LegoFigureWhereUniqueInput | LegoFigureWhereUniqueInput[]
    update?: LegoFigureUpdateWithWhereUniqueWithoutOrderInput | LegoFigureUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LegoFigureUpdateManyWithWhereWithoutOrderInput | LegoFigureUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LegoFigureScalarWhereInput | LegoFigureScalarWhereInput[]
  }

  export type LegoOrderCreateNestedOneWithoutFiguresInput = {
    create?: XOR<LegoOrderCreateWithoutFiguresInput, LegoOrderUncheckedCreateWithoutFiguresInput>
    connectOrCreate?: LegoOrderCreateOrConnectWithoutFiguresInput
    connect?: LegoOrderWhereUniqueInput
  }

  export type LegoOrderUpdateOneRequiredWithoutFiguresNestedInput = {
    create?: XOR<LegoOrderCreateWithoutFiguresInput, LegoOrderUncheckedCreateWithoutFiguresInput>
    connectOrCreate?: LegoOrderCreateOrConnectWithoutFiguresInput
    upsert?: LegoOrderUpsertWithoutFiguresInput
    connect?: LegoOrderWhereUniqueInput
    update?: XOR<XOR<LegoOrderUpdateToOneWithWhereWithoutFiguresInput, LegoOrderUpdateWithoutFiguresInput>, LegoOrderUncheckedUpdateWithoutFiguresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LegoFigureCreateWithoutOrderInput = {
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
  }

  export type LegoFigureUncheckedCreateWithoutOrderInput = {
    id?: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
  }

  export type LegoFigureCreateOrConnectWithoutOrderInput = {
    where: LegoFigureWhereUniqueInput
    create: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput>
  }

  export type LegoFigureCreateManyOrderInputEnvelope = {
    data: LegoFigureCreateManyOrderInput | LegoFigureCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type LegoFigureUpsertWithWhereUniqueWithoutOrderInput = {
    where: LegoFigureWhereUniqueInput
    update: XOR<LegoFigureUpdateWithoutOrderInput, LegoFigureUncheckedUpdateWithoutOrderInput>
    create: XOR<LegoFigureCreateWithoutOrderInput, LegoFigureUncheckedCreateWithoutOrderInput>
  }

  export type LegoFigureUpdateWithWhereUniqueWithoutOrderInput = {
    where: LegoFigureWhereUniqueInput
    data: XOR<LegoFigureUpdateWithoutOrderInput, LegoFigureUncheckedUpdateWithoutOrderInput>
  }

  export type LegoFigureUpdateManyWithWhereWithoutOrderInput = {
    where: LegoFigureScalarWhereInput
    data: XOR<LegoFigureUpdateManyMutationInput, LegoFigureUncheckedUpdateManyWithoutOrderInput>
  }

  export type LegoFigureScalarWhereInput = {
    AND?: LegoFigureScalarWhereInput | LegoFigureScalarWhereInput[]
    OR?: LegoFigureScalarWhereInput[]
    NOT?: LegoFigureScalarWhereInput | LegoFigureScalarWhereInput[]
    id?: IntFilter<"LegoFigure"> | number
    orderId?: IntFilter<"LegoFigure"> | number
    figureNumber?: IntFilter<"LegoFigure"> | number
    hairId?: IntFilter<"LegoFigure"> | number
    faceId?: IntFilter<"LegoFigure"> | number
    bodyId?: IntFilter<"LegoFigure"> | number
    legsId?: IntFilter<"LegoFigure"> | number
    accessories?: StringFilter<"LegoFigure"> | string
    createdAt?: DateTimeFilter<"LegoFigure"> | Date | string
  }

  export type LegoOrderCreateWithoutFiguresInput = {
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount?: number
    status?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress?: string | null
    customerNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegoOrderUncheckedCreateWithoutFiguresInput = {
    id?: number
    planType: string
    planName: string
    planPrice: number
    totalPrice: number
    extraAccessoriesCount?: number
    status?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    customerRut: string
    customerRegion: string
    customerComuna: string
    customerAddress?: string | null
    customerNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegoOrderCreateOrConnectWithoutFiguresInput = {
    where: LegoOrderWhereUniqueInput
    create: XOR<LegoOrderCreateWithoutFiguresInput, LegoOrderUncheckedCreateWithoutFiguresInput>
  }

  export type LegoOrderUpsertWithoutFiguresInput = {
    update: XOR<LegoOrderUpdateWithoutFiguresInput, LegoOrderUncheckedUpdateWithoutFiguresInput>
    create: XOR<LegoOrderCreateWithoutFiguresInput, LegoOrderUncheckedCreateWithoutFiguresInput>
    where?: LegoOrderWhereInput
  }

  export type LegoOrderUpdateToOneWithWhereWithoutFiguresInput = {
    where?: LegoOrderWhereInput
    data: XOR<LegoOrderUpdateWithoutFiguresInput, LegoOrderUncheckedUpdateWithoutFiguresInput>
  }

  export type LegoOrderUpdateWithoutFiguresInput = {
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoOrderUncheckedUpdateWithoutFiguresInput = {
    id?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    extraAccessoriesCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerRut?: StringFieldUpdateOperationsInput | string
    customerRegion?: StringFieldUpdateOperationsInput | string
    customerComuna?: StringFieldUpdateOperationsInput | string
    customerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    customerNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureCreateManyOrderInput = {
    id?: number
    figureNumber: number
    hairId: number
    faceId: number
    bodyId: number
    legsId: number
    accessories: string
    createdAt?: Date | string
  }

  export type LegoFigureUpdateWithoutOrderInput = {
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegoFigureUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    figureNumber?: IntFieldUpdateOperationsInput | number
    hairId?: IntFieldUpdateOperationsInput | number
    faceId?: IntFieldUpdateOperationsInput | number
    bodyId?: IntFieldUpdateOperationsInput | number
    legsId?: IntFieldUpdateOperationsInput | number
    accessories?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}