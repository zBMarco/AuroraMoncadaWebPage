
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Clothing
 * 
 */
export type Clothing = $Result.DefaultSelection<Prisma.$ClothingPayload>
/**
 * Model Myth
 * 
 */
export type Myth = $Result.DefaultSelection<Prisma.$MythPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clothing`: Exposes CRUD operations for the **Clothing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clothing
    * const clothing = await prisma.clothing.findMany()
    * ```
    */
  get clothing(): Prisma.ClothingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myth`: Exposes CRUD operations for the **Myth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Myths
    * const myths = await prisma.myth.findMany()
    * ```
    */
  get myth(): Prisma.MythDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Customer: 'Customer',
    Clothing: 'Clothing',
    Myth: 'Myth',
    Cart: 'Cart',
    CartItem: 'CartItem'
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
      modelProps: "customer" | "clothing" | "myth" | "cart" | "cartItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Clothing: {
        payload: Prisma.$ClothingPayload<ExtArgs>
        fields: Prisma.ClothingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClothingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClothingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          findFirst: {
            args: Prisma.ClothingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClothingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          findMany: {
            args: Prisma.ClothingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          create: {
            args: Prisma.ClothingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          createMany: {
            args: Prisma.ClothingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClothingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          delete: {
            args: Prisma.ClothingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          update: {
            args: Prisma.ClothingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          deleteMany: {
            args: Prisma.ClothingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClothingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClothingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          upsert: {
            args: Prisma.ClothingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          aggregate: {
            args: Prisma.ClothingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClothing>
          }
          groupBy: {
            args: Prisma.ClothingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClothingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClothingCountArgs<ExtArgs>
            result: $Utils.Optional<ClothingCountAggregateOutputType> | number
          }
        }
      }
      Myth: {
        payload: Prisma.$MythPayload<ExtArgs>
        fields: Prisma.MythFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MythFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MythFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          findFirst: {
            args: Prisma.MythFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MythFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          findMany: {
            args: Prisma.MythFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>[]
          }
          create: {
            args: Prisma.MythCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          createMany: {
            args: Prisma.MythCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MythCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>[]
          }
          delete: {
            args: Prisma.MythDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          update: {
            args: Prisma.MythUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          deleteMany: {
            args: Prisma.MythDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MythUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MythUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>[]
          }
          upsert: {
            args: Prisma.MythUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MythPayload>
          }
          aggregate: {
            args: Prisma.MythAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyth>
          }
          groupBy: {
            args: Prisma.MythGroupByArgs<ExtArgs>
            result: $Utils.Optional<MythGroupByOutputType>[]
          }
          count: {
            args: Prisma.MythCountArgs<ExtArgs>
            result: $Utils.Optional<MythCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    customer?: CustomerOmit
    clothing?: ClothingOmit
    myth?: MythOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    carts: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | CustomerCountOutputTypeCountCartsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }


  /**
   * Count Type ClothingCountOutputType
   */

  export type ClothingCountOutputType = {
    myths: number
    cartItems: number
  }

  export type ClothingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myths?: boolean | ClothingCountOutputTypeCountMythsArgs
    cartItems?: boolean | ClothingCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * ClothingCountOutputType without action
   */
  export type ClothingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothingCountOutputType
     */
    select?: ClothingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClothingCountOutputType without action
   */
  export type ClothingCountOutputTypeCountMythsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MythWhereInput
  }

  /**
   * ClothingCountOutputType without action
   */
  export type ClothingCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_id: number
    name: number
    email: number
    address: number
    phone: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customer_id: number
    name: string
    email: string
    address: string | null
    phone: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    carts?: boolean | Customer$cartsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customer_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "name" | "email" | "address" | "phone", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | Customer$cartsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      carts: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      name: string
      email: string
      address: string | null
      phone: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends Customer$cartsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customer_id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.carts
   */
  export type Customer$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Clothing
   */

  export type AggregateClothing = {
    _count: ClothingCountAggregateOutputType | null
    _avg: ClothingAvgAggregateOutputType | null
    _sum: ClothingSumAggregateOutputType | null
    _min: ClothingMinAggregateOutputType | null
    _max: ClothingMaxAggregateOutputType | null
  }

  export type ClothingAvgAggregateOutputType = {
    clothing_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ClothingSumAggregateOutputType = {
    clothing_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ClothingMinAggregateOutputType = {
    clothing_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    image_url: string | null
  }

  export type ClothingMaxAggregateOutputType = {
    clothing_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    image_url: string | null
  }

  export type ClothingCountAggregateOutputType = {
    clothing_id: number
    name: number
    description: number
    price: number
    stock: number
    image_url: number
    _all: number
  }


  export type ClothingAvgAggregateInputType = {
    clothing_id?: true
    price?: true
    stock?: true
  }

  export type ClothingSumAggregateInputType = {
    clothing_id?: true
    price?: true
    stock?: true
  }

  export type ClothingMinAggregateInputType = {
    clothing_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    image_url?: true
  }

  export type ClothingMaxAggregateInputType = {
    clothing_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    image_url?: true
  }

  export type ClothingCountAggregateInputType = {
    clothing_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    image_url?: true
    _all?: true
  }

  export type ClothingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clothing to aggregate.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clothing
    **/
    _count?: true | ClothingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClothingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClothingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClothingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClothingMaxAggregateInputType
  }

  export type GetClothingAggregateType<T extends ClothingAggregateArgs> = {
        [P in keyof T & keyof AggregateClothing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClothing[P]>
      : GetScalarType<T[P], AggregateClothing[P]>
  }




  export type ClothingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingWhereInput
    orderBy?: ClothingOrderByWithAggregationInput | ClothingOrderByWithAggregationInput[]
    by: ClothingScalarFieldEnum[] | ClothingScalarFieldEnum
    having?: ClothingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClothingCountAggregateInputType | true
    _avg?: ClothingAvgAggregateInputType
    _sum?: ClothingSumAggregateInputType
    _min?: ClothingMinAggregateInputType
    _max?: ClothingMaxAggregateInputType
  }

  export type ClothingGroupByOutputType = {
    clothing_id: number
    name: string
    description: string | null
    price: Decimal
    stock: number
    image_url: string | null
    _count: ClothingCountAggregateOutputType | null
    _avg: ClothingAvgAggregateOutputType | null
    _sum: ClothingSumAggregateOutputType | null
    _min: ClothingMinAggregateOutputType | null
    _max: ClothingMaxAggregateOutputType | null
  }

  type GetClothingGroupByPayload<T extends ClothingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClothingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClothingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClothingGroupByOutputType[P]>
            : GetScalarType<T[P], ClothingGroupByOutputType[P]>
        }
      >
    >


  export type ClothingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clothing_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    image_url?: boolean
    myths?: boolean | Clothing$mythsArgs<ExtArgs>
    cartItems?: boolean | Clothing$cartItemsArgs<ExtArgs>
    _count?: boolean | ClothingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clothing_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clothing_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectScalar = {
    clothing_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    image_url?: boolean
  }

  export type ClothingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clothing_id" | "name" | "description" | "price" | "stock" | "image_url", ExtArgs["result"]["clothing"]>
  export type ClothingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myths?: boolean | Clothing$mythsArgs<ExtArgs>
    cartItems?: boolean | Clothing$cartItemsArgs<ExtArgs>
    _count?: boolean | ClothingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClothingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClothingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClothingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clothing"
    objects: {
      myths: Prisma.$MythPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      clothing_id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number
      image_url: string | null
    }, ExtArgs["result"]["clothing"]>
    composites: {}
  }

  type ClothingGetPayload<S extends boolean | null | undefined | ClothingDefaultArgs> = $Result.GetResult<Prisma.$ClothingPayload, S>

  type ClothingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClothingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClothingCountAggregateInputType | true
    }

  export interface ClothingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clothing'], meta: { name: 'Clothing' } }
    /**
     * Find zero or one Clothing that matches the filter.
     * @param {ClothingFindUniqueArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClothingFindUniqueArgs>(args: SelectSubset<T, ClothingFindUniqueArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clothing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClothingFindUniqueOrThrowArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClothingFindUniqueOrThrowArgs>(args: SelectSubset<T, ClothingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindFirstArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClothingFindFirstArgs>(args?: SelectSubset<T, ClothingFindFirstArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindFirstOrThrowArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClothingFindFirstOrThrowArgs>(args?: SelectSubset<T, ClothingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clothing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clothing
     * const clothing = await prisma.clothing.findMany()
     * 
     * // Get first 10 Clothing
     * const clothing = await prisma.clothing.findMany({ take: 10 })
     * 
     * // Only select the `clothing_id`
     * const clothingWithClothing_idOnly = await prisma.clothing.findMany({ select: { clothing_id: true } })
     * 
     */
    findMany<T extends ClothingFindManyArgs>(args?: SelectSubset<T, ClothingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clothing.
     * @param {ClothingCreateArgs} args - Arguments to create a Clothing.
     * @example
     * // Create one Clothing
     * const Clothing = await prisma.clothing.create({
     *   data: {
     *     // ... data to create a Clothing
     *   }
     * })
     * 
     */
    create<T extends ClothingCreateArgs>(args: SelectSubset<T, ClothingCreateArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clothing.
     * @param {ClothingCreateManyArgs} args - Arguments to create many Clothing.
     * @example
     * // Create many Clothing
     * const clothing = await prisma.clothing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClothingCreateManyArgs>(args?: SelectSubset<T, ClothingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clothing and returns the data saved in the database.
     * @param {ClothingCreateManyAndReturnArgs} args - Arguments to create many Clothing.
     * @example
     * // Create many Clothing
     * const clothing = await prisma.clothing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clothing and only return the `clothing_id`
     * const clothingWithClothing_idOnly = await prisma.clothing.createManyAndReturn({
     *   select: { clothing_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClothingCreateManyAndReturnArgs>(args?: SelectSubset<T, ClothingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clothing.
     * @param {ClothingDeleteArgs} args - Arguments to delete one Clothing.
     * @example
     * // Delete one Clothing
     * const Clothing = await prisma.clothing.delete({
     *   where: {
     *     // ... filter to delete one Clothing
     *   }
     * })
     * 
     */
    delete<T extends ClothingDeleteArgs>(args: SelectSubset<T, ClothingDeleteArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clothing.
     * @param {ClothingUpdateArgs} args - Arguments to update one Clothing.
     * @example
     * // Update one Clothing
     * const clothing = await prisma.clothing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClothingUpdateArgs>(args: SelectSubset<T, ClothingUpdateArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clothing.
     * @param {ClothingDeleteManyArgs} args - Arguments to filter Clothing to delete.
     * @example
     * // Delete a few Clothing
     * const { count } = await prisma.clothing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClothingDeleteManyArgs>(args?: SelectSubset<T, ClothingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clothing
     * const clothing = await prisma.clothing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClothingUpdateManyArgs>(args: SelectSubset<T, ClothingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clothing and returns the data updated in the database.
     * @param {ClothingUpdateManyAndReturnArgs} args - Arguments to update many Clothing.
     * @example
     * // Update many Clothing
     * const clothing = await prisma.clothing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clothing and only return the `clothing_id`
     * const clothingWithClothing_idOnly = await prisma.clothing.updateManyAndReturn({
     *   select: { clothing_id: true },
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
    updateManyAndReturn<T extends ClothingUpdateManyAndReturnArgs>(args: SelectSubset<T, ClothingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clothing.
     * @param {ClothingUpsertArgs} args - Arguments to update or create a Clothing.
     * @example
     * // Update or create a Clothing
     * const clothing = await prisma.clothing.upsert({
     *   create: {
     *     // ... data to create a Clothing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clothing we want to update
     *   }
     * })
     */
    upsert<T extends ClothingUpsertArgs>(args: SelectSubset<T, ClothingUpsertArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingCountArgs} args - Arguments to filter Clothing to count.
     * @example
     * // Count the number of Clothing
     * const count = await prisma.clothing.count({
     *   where: {
     *     // ... the filter for the Clothing we want to count
     *   }
     * })
    **/
    count<T extends ClothingCountArgs>(
      args?: Subset<T, ClothingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClothingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClothingAggregateArgs>(args: Subset<T, ClothingAggregateArgs>): Prisma.PrismaPromise<GetClothingAggregateType<T>>

    /**
     * Group by Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingGroupByArgs} args - Group by arguments.
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
      T extends ClothingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClothingGroupByArgs['orderBy'] }
        : { orderBy?: ClothingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClothingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClothingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clothing model
   */
  readonly fields: ClothingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clothing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClothingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    myths<T extends Clothing$mythsArgs<ExtArgs> = {}>(args?: Subset<T, Clothing$mythsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends Clothing$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Clothing$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clothing model
   */
  interface ClothingFieldRefs {
    readonly clothing_id: FieldRef<"Clothing", 'Int'>
    readonly name: FieldRef<"Clothing", 'String'>
    readonly description: FieldRef<"Clothing", 'String'>
    readonly price: FieldRef<"Clothing", 'Decimal'>
    readonly stock: FieldRef<"Clothing", 'Int'>
    readonly image_url: FieldRef<"Clothing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clothing findUnique
   */
  export type ClothingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing findUniqueOrThrow
   */
  export type ClothingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing findFirst
   */
  export type ClothingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clothing.
     */
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing findFirstOrThrow
   */
  export type ClothingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clothing.
     */
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing findMany
   */
  export type ClothingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing create
   */
  export type ClothingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The data needed to create a Clothing.
     */
    data: XOR<ClothingCreateInput, ClothingUncheckedCreateInput>
  }

  /**
   * Clothing createMany
   */
  export type ClothingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clothing.
     */
    data: ClothingCreateManyInput | ClothingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clothing createManyAndReturn
   */
  export type ClothingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * The data used to create many Clothing.
     */
    data: ClothingCreateManyInput | ClothingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clothing update
   */
  export type ClothingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The data needed to update a Clothing.
     */
    data: XOR<ClothingUpdateInput, ClothingUncheckedUpdateInput>
    /**
     * Choose, which Clothing to update.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing updateMany
   */
  export type ClothingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clothing.
     */
    data: XOR<ClothingUpdateManyMutationInput, ClothingUncheckedUpdateManyInput>
    /**
     * Filter which Clothing to update
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to update.
     */
    limit?: number
  }

  /**
   * Clothing updateManyAndReturn
   */
  export type ClothingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * The data used to update Clothing.
     */
    data: XOR<ClothingUpdateManyMutationInput, ClothingUncheckedUpdateManyInput>
    /**
     * Filter which Clothing to update
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to update.
     */
    limit?: number
  }

  /**
   * Clothing upsert
   */
  export type ClothingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The filter to search for the Clothing to update in case it exists.
     */
    where: ClothingWhereUniqueInput
    /**
     * In case the Clothing found by the `where` argument doesn't exist, create a new Clothing with this data.
     */
    create: XOR<ClothingCreateInput, ClothingUncheckedCreateInput>
    /**
     * In case the Clothing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClothingUpdateInput, ClothingUncheckedUpdateInput>
  }

  /**
   * Clothing delete
   */
  export type ClothingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter which Clothing to delete.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing deleteMany
   */
  export type ClothingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clothing to delete
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to delete.
     */
    limit?: number
  }

  /**
   * Clothing.myths
   */
  export type Clothing$mythsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    where?: MythWhereInput
    orderBy?: MythOrderByWithRelationInput | MythOrderByWithRelationInput[]
    cursor?: MythWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MythScalarFieldEnum | MythScalarFieldEnum[]
  }

  /**
   * Clothing.cartItems
   */
  export type Clothing$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Clothing without action
   */
  export type ClothingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
  }


  /**
   * Model Myth
   */

  export type AggregateMyth = {
    _count: MythCountAggregateOutputType | null
    _avg: MythAvgAggregateOutputType | null
    _sum: MythSumAggregateOutputType | null
    _min: MythMinAggregateOutputType | null
    _max: MythMaxAggregateOutputType | null
  }

  export type MythAvgAggregateOutputType = {
    myth_id: number | null
    clothing_id: number | null
  }

  export type MythSumAggregateOutputType = {
    myth_id: number | null
    clothing_id: number | null
  }

  export type MythMinAggregateOutputType = {
    myth_id: number | null
    title: string | null
    content: string | null
    clothing_id: number | null
  }

  export type MythMaxAggregateOutputType = {
    myth_id: number | null
    title: string | null
    content: string | null
    clothing_id: number | null
  }

  export type MythCountAggregateOutputType = {
    myth_id: number
    title: number
    content: number
    clothing_id: number
    _all: number
  }


  export type MythAvgAggregateInputType = {
    myth_id?: true
    clothing_id?: true
  }

  export type MythSumAggregateInputType = {
    myth_id?: true
    clothing_id?: true
  }

  export type MythMinAggregateInputType = {
    myth_id?: true
    title?: true
    content?: true
    clothing_id?: true
  }

  export type MythMaxAggregateInputType = {
    myth_id?: true
    title?: true
    content?: true
    clothing_id?: true
  }

  export type MythCountAggregateInputType = {
    myth_id?: true
    title?: true
    content?: true
    clothing_id?: true
    _all?: true
  }

  export type MythAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Myth to aggregate.
     */
    where?: MythWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Myths to fetch.
     */
    orderBy?: MythOrderByWithRelationInput | MythOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MythWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Myths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Myths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Myths
    **/
    _count?: true | MythCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MythAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MythSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MythMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MythMaxAggregateInputType
  }

  export type GetMythAggregateType<T extends MythAggregateArgs> = {
        [P in keyof T & keyof AggregateMyth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyth[P]>
      : GetScalarType<T[P], AggregateMyth[P]>
  }




  export type MythGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MythWhereInput
    orderBy?: MythOrderByWithAggregationInput | MythOrderByWithAggregationInput[]
    by: MythScalarFieldEnum[] | MythScalarFieldEnum
    having?: MythScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MythCountAggregateInputType | true
    _avg?: MythAvgAggregateInputType
    _sum?: MythSumAggregateInputType
    _min?: MythMinAggregateInputType
    _max?: MythMaxAggregateInputType
  }

  export type MythGroupByOutputType = {
    myth_id: number
    title: string
    content: string
    clothing_id: number
    _count: MythCountAggregateOutputType | null
    _avg: MythAvgAggregateOutputType | null
    _sum: MythSumAggregateOutputType | null
    _min: MythMinAggregateOutputType | null
    _max: MythMaxAggregateOutputType | null
  }

  type GetMythGroupByPayload<T extends MythGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MythGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MythGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MythGroupByOutputType[P]>
            : GetScalarType<T[P], MythGroupByOutputType[P]>
        }
      >
    >


  export type MythSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    myth_id?: boolean
    title?: boolean
    content?: boolean
    clothing_id?: boolean
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myth"]>

  export type MythSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    myth_id?: boolean
    title?: boolean
    content?: boolean
    clothing_id?: boolean
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myth"]>

  export type MythSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    myth_id?: boolean
    title?: boolean
    content?: boolean
    clothing_id?: boolean
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myth"]>

  export type MythSelectScalar = {
    myth_id?: boolean
    title?: boolean
    content?: boolean
    clothing_id?: boolean
  }

  export type MythOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"myth_id" | "title" | "content" | "clothing_id", ExtArgs["result"]["myth"]>
  export type MythInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }
  export type MythIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }
  export type MythIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }

  export type $MythPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Myth"
    objects: {
      clothing: Prisma.$ClothingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      myth_id: number
      title: string
      content: string
      clothing_id: number
    }, ExtArgs["result"]["myth"]>
    composites: {}
  }

  type MythGetPayload<S extends boolean | null | undefined | MythDefaultArgs> = $Result.GetResult<Prisma.$MythPayload, S>

  type MythCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MythFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MythCountAggregateInputType | true
    }

  export interface MythDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Myth'], meta: { name: 'Myth' } }
    /**
     * Find zero or one Myth that matches the filter.
     * @param {MythFindUniqueArgs} args - Arguments to find a Myth
     * @example
     * // Get one Myth
     * const myth = await prisma.myth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MythFindUniqueArgs>(args: SelectSubset<T, MythFindUniqueArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Myth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MythFindUniqueOrThrowArgs} args - Arguments to find a Myth
     * @example
     * // Get one Myth
     * const myth = await prisma.myth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MythFindUniqueOrThrowArgs>(args: SelectSubset<T, MythFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Myth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythFindFirstArgs} args - Arguments to find a Myth
     * @example
     * // Get one Myth
     * const myth = await prisma.myth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MythFindFirstArgs>(args?: SelectSubset<T, MythFindFirstArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Myth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythFindFirstOrThrowArgs} args - Arguments to find a Myth
     * @example
     * // Get one Myth
     * const myth = await prisma.myth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MythFindFirstOrThrowArgs>(args?: SelectSubset<T, MythFindFirstOrThrowArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Myths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Myths
     * const myths = await prisma.myth.findMany()
     * 
     * // Get first 10 Myths
     * const myths = await prisma.myth.findMany({ take: 10 })
     * 
     * // Only select the `myth_id`
     * const mythWithMyth_idOnly = await prisma.myth.findMany({ select: { myth_id: true } })
     * 
     */
    findMany<T extends MythFindManyArgs>(args?: SelectSubset<T, MythFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Myth.
     * @param {MythCreateArgs} args - Arguments to create a Myth.
     * @example
     * // Create one Myth
     * const Myth = await prisma.myth.create({
     *   data: {
     *     // ... data to create a Myth
     *   }
     * })
     * 
     */
    create<T extends MythCreateArgs>(args: SelectSubset<T, MythCreateArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Myths.
     * @param {MythCreateManyArgs} args - Arguments to create many Myths.
     * @example
     * // Create many Myths
     * const myth = await prisma.myth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MythCreateManyArgs>(args?: SelectSubset<T, MythCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Myths and returns the data saved in the database.
     * @param {MythCreateManyAndReturnArgs} args - Arguments to create many Myths.
     * @example
     * // Create many Myths
     * const myth = await prisma.myth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Myths and only return the `myth_id`
     * const mythWithMyth_idOnly = await prisma.myth.createManyAndReturn({
     *   select: { myth_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MythCreateManyAndReturnArgs>(args?: SelectSubset<T, MythCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Myth.
     * @param {MythDeleteArgs} args - Arguments to delete one Myth.
     * @example
     * // Delete one Myth
     * const Myth = await prisma.myth.delete({
     *   where: {
     *     // ... filter to delete one Myth
     *   }
     * })
     * 
     */
    delete<T extends MythDeleteArgs>(args: SelectSubset<T, MythDeleteArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Myth.
     * @param {MythUpdateArgs} args - Arguments to update one Myth.
     * @example
     * // Update one Myth
     * const myth = await prisma.myth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MythUpdateArgs>(args: SelectSubset<T, MythUpdateArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Myths.
     * @param {MythDeleteManyArgs} args - Arguments to filter Myths to delete.
     * @example
     * // Delete a few Myths
     * const { count } = await prisma.myth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MythDeleteManyArgs>(args?: SelectSubset<T, MythDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Myths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Myths
     * const myth = await prisma.myth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MythUpdateManyArgs>(args: SelectSubset<T, MythUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Myths and returns the data updated in the database.
     * @param {MythUpdateManyAndReturnArgs} args - Arguments to update many Myths.
     * @example
     * // Update many Myths
     * const myth = await prisma.myth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Myths and only return the `myth_id`
     * const mythWithMyth_idOnly = await prisma.myth.updateManyAndReturn({
     *   select: { myth_id: true },
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
    updateManyAndReturn<T extends MythUpdateManyAndReturnArgs>(args: SelectSubset<T, MythUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Myth.
     * @param {MythUpsertArgs} args - Arguments to update or create a Myth.
     * @example
     * // Update or create a Myth
     * const myth = await prisma.myth.upsert({
     *   create: {
     *     // ... data to create a Myth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Myth we want to update
     *   }
     * })
     */
    upsert<T extends MythUpsertArgs>(args: SelectSubset<T, MythUpsertArgs<ExtArgs>>): Prisma__MythClient<$Result.GetResult<Prisma.$MythPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Myths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythCountArgs} args - Arguments to filter Myths to count.
     * @example
     * // Count the number of Myths
     * const count = await prisma.myth.count({
     *   where: {
     *     // ... the filter for the Myths we want to count
     *   }
     * })
    **/
    count<T extends MythCountArgs>(
      args?: Subset<T, MythCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MythCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Myth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MythAggregateArgs>(args: Subset<T, MythAggregateArgs>): Prisma.PrismaPromise<GetMythAggregateType<T>>

    /**
     * Group by Myth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MythGroupByArgs} args - Group by arguments.
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
      T extends MythGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MythGroupByArgs['orderBy'] }
        : { orderBy?: MythGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MythGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMythGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Myth model
   */
  readonly fields: MythFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Myth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MythClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothing<T extends ClothingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClothingDefaultArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Myth model
   */
  interface MythFieldRefs {
    readonly myth_id: FieldRef<"Myth", 'Int'>
    readonly title: FieldRef<"Myth", 'String'>
    readonly content: FieldRef<"Myth", 'String'>
    readonly clothing_id: FieldRef<"Myth", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Myth findUnique
   */
  export type MythFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter, which Myth to fetch.
     */
    where: MythWhereUniqueInput
  }

  /**
   * Myth findUniqueOrThrow
   */
  export type MythFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter, which Myth to fetch.
     */
    where: MythWhereUniqueInput
  }

  /**
   * Myth findFirst
   */
  export type MythFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter, which Myth to fetch.
     */
    where?: MythWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Myths to fetch.
     */
    orderBy?: MythOrderByWithRelationInput | MythOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Myths.
     */
    cursor?: MythWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Myths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Myths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Myths.
     */
    distinct?: MythScalarFieldEnum | MythScalarFieldEnum[]
  }

  /**
   * Myth findFirstOrThrow
   */
  export type MythFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter, which Myth to fetch.
     */
    where?: MythWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Myths to fetch.
     */
    orderBy?: MythOrderByWithRelationInput | MythOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Myths.
     */
    cursor?: MythWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Myths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Myths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Myths.
     */
    distinct?: MythScalarFieldEnum | MythScalarFieldEnum[]
  }

  /**
   * Myth findMany
   */
  export type MythFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter, which Myths to fetch.
     */
    where?: MythWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Myths to fetch.
     */
    orderBy?: MythOrderByWithRelationInput | MythOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Myths.
     */
    cursor?: MythWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Myths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Myths.
     */
    skip?: number
    distinct?: MythScalarFieldEnum | MythScalarFieldEnum[]
  }

  /**
   * Myth create
   */
  export type MythCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * The data needed to create a Myth.
     */
    data: XOR<MythCreateInput, MythUncheckedCreateInput>
  }

  /**
   * Myth createMany
   */
  export type MythCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Myths.
     */
    data: MythCreateManyInput | MythCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Myth createManyAndReturn
   */
  export type MythCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * The data used to create many Myths.
     */
    data: MythCreateManyInput | MythCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Myth update
   */
  export type MythUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * The data needed to update a Myth.
     */
    data: XOR<MythUpdateInput, MythUncheckedUpdateInput>
    /**
     * Choose, which Myth to update.
     */
    where: MythWhereUniqueInput
  }

  /**
   * Myth updateMany
   */
  export type MythUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Myths.
     */
    data: XOR<MythUpdateManyMutationInput, MythUncheckedUpdateManyInput>
    /**
     * Filter which Myths to update
     */
    where?: MythWhereInput
    /**
     * Limit how many Myths to update.
     */
    limit?: number
  }

  /**
   * Myth updateManyAndReturn
   */
  export type MythUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * The data used to update Myths.
     */
    data: XOR<MythUpdateManyMutationInput, MythUncheckedUpdateManyInput>
    /**
     * Filter which Myths to update
     */
    where?: MythWhereInput
    /**
     * Limit how many Myths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Myth upsert
   */
  export type MythUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * The filter to search for the Myth to update in case it exists.
     */
    where: MythWhereUniqueInput
    /**
     * In case the Myth found by the `where` argument doesn't exist, create a new Myth with this data.
     */
    create: XOR<MythCreateInput, MythUncheckedCreateInput>
    /**
     * In case the Myth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MythUpdateInput, MythUncheckedUpdateInput>
  }

  /**
   * Myth delete
   */
  export type MythDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
    /**
     * Filter which Myth to delete.
     */
    where: MythWhereUniqueInput
  }

  /**
   * Myth deleteMany
   */
  export type MythDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Myths to delete
     */
    where?: MythWhereInput
    /**
     * Limit how many Myths to delete.
     */
    limit?: number
  }

  /**
   * Myth without action
   */
  export type MythDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Myth
     */
    select?: MythSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Myth
     */
    omit?: MythOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MythInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cart_id: number | null
    customer_id: number | null
  }

  export type CartSumAggregateOutputType = {
    cart_id: number | null
    customer_id: number | null
  }

  export type CartMinAggregateOutputType = {
    cart_id: number | null
    customer_id: number | null
    created_at: Date | null
  }

  export type CartMaxAggregateOutputType = {
    cart_id: number | null
    customer_id: number | null
    created_at: Date | null
  }

  export type CartCountAggregateOutputType = {
    cart_id: number
    customer_id: number
    created_at: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cart_id?: true
    customer_id?: true
  }

  export type CartSumAggregateInputType = {
    cart_id?: true
    customer_id?: true
  }

  export type CartMinAggregateInputType = {
    cart_id?: true
    customer_id?: true
    created_at?: true
  }

  export type CartMaxAggregateInputType = {
    cart_id?: true
    customer_id?: true
    created_at?: true
  }

  export type CartCountAggregateInputType = {
    cart_id?: true
    customer_id?: true
    created_at?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    cart_id: number
    customer_id: number
    created_at: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    cart_id?: boolean
    customer_id?: boolean
    created_at?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "customer_id" | "created_at", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      customer_id: number
      created_at: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.createManyAndReturn({
     *   select: { cart_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.updateManyAndReturn({
     *   select: { cart_id: true },
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
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly cart_id: FieldRef<"Cart", 'Int'>
    readonly customer_id: FieldRef<"Cart", 'Int'>
    readonly created_at: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    clothing_id: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    clothing_id: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    clothing_id: number | null
    quantity: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    clothing_id: number | null
    quantity: number | null
  }

  export type CartItemCountAggregateOutputType = {
    cart_item_id: number
    cart_id: number
    clothing_id: number
    quantity: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    clothing_id?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    clothing_id?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    clothing_id?: true
    quantity?: true
  }

  export type CartItemMaxAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    clothing_id?: true
    quantity?: true
  }

  export type CartItemCountAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    clothing_id?: true
    quantity?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    cart_item_id: number
    cart_id: number
    clothing_id: number
    quantity: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    clothing_id?: boolean
    quantity?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    clothing_id?: boolean
    quantity?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    clothing_id?: boolean
    quantity?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    cart_item_id?: boolean
    cart_id?: boolean
    clothing_id?: boolean
    quantity?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_item_id" | "cart_id" | "clothing_id" | "quantity", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    clothing?: boolean | ClothingDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      clothing: Prisma.$ClothingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_item_id: number
      cart_id: number
      clothing_id: number
      quantity: number
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `cart_item_id`
     * const cartItemWithCart_item_idOnly = await prisma.cartItem.findMany({ select: { cart_item_id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `cart_item_id`
     * const cartItemWithCart_item_idOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { cart_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `cart_item_id`
     * const cartItemWithCart_item_idOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { cart_item_id: true },
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clothing<T extends ClothingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClothingDefaultArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly cart_item_id: FieldRef<"CartItem", 'Int'>
    readonly cart_id: FieldRef<"CartItem", 'Int'>
    readonly clothing_id: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    customer_id: 'customer_id',
    name: 'name',
    email: 'email',
    address: 'address',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ClothingScalarFieldEnum: {
    clothing_id: 'clothing_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    image_url: 'image_url'
  };

  export type ClothingScalarFieldEnum = (typeof ClothingScalarFieldEnum)[keyof typeof ClothingScalarFieldEnum]


  export const MythScalarFieldEnum: {
    myth_id: 'myth_id',
    title: 'title',
    content: 'content',
    clothing_id: 'clothing_id'
  };

  export type MythScalarFieldEnum = (typeof MythScalarFieldEnum)[keyof typeof MythScalarFieldEnum]


  export const CartScalarFieldEnum: {
    cart_id: 'cart_id',
    customer_id: 'customer_id',
    created_at: 'created_at'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    clothing_id: 'clothing_id',
    quantity: 'quantity'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customer_id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    carts?: CartListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    carts?: CartOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    carts?: CartListRelationFilter
  }, "customer_id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type ClothingWhereInput = {
    AND?: ClothingWhereInput | ClothingWhereInput[]
    OR?: ClothingWhereInput[]
    NOT?: ClothingWhereInput | ClothingWhereInput[]
    clothing_id?: IntFilter<"Clothing"> | number
    name?: StringFilter<"Clothing"> | string
    description?: StringNullableFilter<"Clothing"> | string | null
    price?: DecimalFilter<"Clothing"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Clothing"> | number
    image_url?: StringNullableFilter<"Clothing"> | string | null
    myths?: MythListRelationFilter
    cartItems?: CartItemListRelationFilter
  }

  export type ClothingOrderByWithRelationInput = {
    clothing_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    image_url?: SortOrderInput | SortOrder
    myths?: MythOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type ClothingWhereUniqueInput = Prisma.AtLeast<{
    clothing_id?: number
    AND?: ClothingWhereInput | ClothingWhereInput[]
    OR?: ClothingWhereInput[]
    NOT?: ClothingWhereInput | ClothingWhereInput[]
    name?: StringFilter<"Clothing"> | string
    description?: StringNullableFilter<"Clothing"> | string | null
    price?: DecimalFilter<"Clothing"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Clothing"> | number
    image_url?: StringNullableFilter<"Clothing"> | string | null
    myths?: MythListRelationFilter
    cartItems?: CartItemListRelationFilter
  }, "clothing_id">

  export type ClothingOrderByWithAggregationInput = {
    clothing_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: ClothingCountOrderByAggregateInput
    _avg?: ClothingAvgOrderByAggregateInput
    _max?: ClothingMaxOrderByAggregateInput
    _min?: ClothingMinOrderByAggregateInput
    _sum?: ClothingSumOrderByAggregateInput
  }

  export type ClothingScalarWhereWithAggregatesInput = {
    AND?: ClothingScalarWhereWithAggregatesInput | ClothingScalarWhereWithAggregatesInput[]
    OR?: ClothingScalarWhereWithAggregatesInput[]
    NOT?: ClothingScalarWhereWithAggregatesInput | ClothingScalarWhereWithAggregatesInput[]
    clothing_id?: IntWithAggregatesFilter<"Clothing"> | number
    name?: StringWithAggregatesFilter<"Clothing"> | string
    description?: StringNullableWithAggregatesFilter<"Clothing"> | string | null
    price?: DecimalWithAggregatesFilter<"Clothing"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Clothing"> | number
    image_url?: StringNullableWithAggregatesFilter<"Clothing"> | string | null
  }

  export type MythWhereInput = {
    AND?: MythWhereInput | MythWhereInput[]
    OR?: MythWhereInput[]
    NOT?: MythWhereInput | MythWhereInput[]
    myth_id?: IntFilter<"Myth"> | number
    title?: StringFilter<"Myth"> | string
    content?: StringFilter<"Myth"> | string
    clothing_id?: IntFilter<"Myth"> | number
    clothing?: XOR<ClothingScalarRelationFilter, ClothingWhereInput>
  }

  export type MythOrderByWithRelationInput = {
    myth_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    clothing_id?: SortOrder
    clothing?: ClothingOrderByWithRelationInput
  }

  export type MythWhereUniqueInput = Prisma.AtLeast<{
    myth_id?: number
    AND?: MythWhereInput | MythWhereInput[]
    OR?: MythWhereInput[]
    NOT?: MythWhereInput | MythWhereInput[]
    title?: StringFilter<"Myth"> | string
    content?: StringFilter<"Myth"> | string
    clothing_id?: IntFilter<"Myth"> | number
    clothing?: XOR<ClothingScalarRelationFilter, ClothingWhereInput>
  }, "myth_id">

  export type MythOrderByWithAggregationInput = {
    myth_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    clothing_id?: SortOrder
    _count?: MythCountOrderByAggregateInput
    _avg?: MythAvgOrderByAggregateInput
    _max?: MythMaxOrderByAggregateInput
    _min?: MythMinOrderByAggregateInput
    _sum?: MythSumOrderByAggregateInput
  }

  export type MythScalarWhereWithAggregatesInput = {
    AND?: MythScalarWhereWithAggregatesInput | MythScalarWhereWithAggregatesInput[]
    OR?: MythScalarWhereWithAggregatesInput[]
    NOT?: MythScalarWhereWithAggregatesInput | MythScalarWhereWithAggregatesInput[]
    myth_id?: IntWithAggregatesFilter<"Myth"> | number
    title?: StringWithAggregatesFilter<"Myth"> | string
    content?: StringWithAggregatesFilter<"Myth"> | string
    clothing_id?: IntWithAggregatesFilter<"Myth"> | number
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    cart_id?: IntFilter<"Cart"> | number
    customer_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    customer_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: CartItemListRelationFilter
  }, "cart_id">

  export type CartOrderByWithAggregationInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"Cart"> | number
    customer_id?: IntWithAggregatesFilter<"Cart"> | number
    created_at?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cart_item_id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    clothing_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    clothing?: XOR<ClothingScalarRelationFilter, ClothingWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
    cart?: CartOrderByWithRelationInput
    clothing?: ClothingOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cart_id?: IntFilter<"CartItem"> | number
    clothing_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    clothing?: XOR<ClothingScalarRelationFilter, ClothingWhereInput>
  }, "cart_item_id">

  export type CartItemOrderByWithAggregationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    cart_item_id?: IntWithAggregatesFilter<"CartItem"> | number
    cart_id?: IntWithAggregatesFilter<"CartItem"> | number
    clothing_id?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    address?: string | null
    phone?: string | null
    carts?: CartCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customer_id?: number
    name: string
    email: string
    address?: string | null
    phone?: string | null
    carts?: CartUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: CartUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: CartUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customer_id?: number
    name: string
    email: string
    address?: string | null
    phone?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClothingCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    myths?: MythCreateNestedManyWithoutClothingInput
    cartItems?: CartItemCreateNestedManyWithoutClothingInput
  }

  export type ClothingUncheckedCreateInput = {
    clothing_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    myths?: MythUncheckedCreateNestedManyWithoutClothingInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutClothingInput
  }

  export type ClothingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    myths?: MythUpdateManyWithoutClothingNestedInput
    cartItems?: CartItemUpdateManyWithoutClothingNestedInput
  }

  export type ClothingUncheckedUpdateInput = {
    clothing_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    myths?: MythUncheckedUpdateManyWithoutClothingNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutClothingNestedInput
  }

  export type ClothingCreateManyInput = {
    clothing_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
  }

  export type ClothingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClothingUncheckedUpdateManyInput = {
    clothing_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MythCreateInput = {
    title: string
    content: string
    clothing: ClothingCreateNestedOneWithoutMythsInput
  }

  export type MythUncheckedCreateInput = {
    myth_id?: number
    title: string
    content: string
    clothing_id: number
  }

  export type MythUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    clothing?: ClothingUpdateOneRequiredWithoutMythsNestedInput
  }

  export type MythUncheckedUpdateInput = {
    myth_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    clothing_id?: IntFieldUpdateOperationsInput | number
  }

  export type MythCreateManyInput = {
    myth_id?: number
    title: string
    content: string
    clothing_id: number
  }

  export type MythUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MythUncheckedUpdateManyInput = {
    myth_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    clothing_id?: IntFieldUpdateOperationsInput | number
  }

  export type CartCreateInput = {
    created_at?: Date | string
    customer: CustomerCreateNestedOneWithoutCartsInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    cart_id?: number
    customer_id: number
    created_at?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCartsNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    cart_id?: number
    customer_id: number
    created_at?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutItemsInput
    clothing: ClothingCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    cart_item_id?: number
    cart_id: number
    clothing_id: number
    quantity: number
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    clothing?: ClothingUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    clothing_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyInput = {
    cart_item_id?: number
    cart_id: number
    clothing_id: number
    quantity: number
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    clothing_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customer_id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MythListRelationFilter = {
    every?: MythWhereInput
    some?: MythWhereInput
    none?: MythWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type MythOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClothingCountOrderByAggregateInput = {
    clothing_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    image_url?: SortOrder
  }

  export type ClothingAvgOrderByAggregateInput = {
    clothing_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type ClothingMaxOrderByAggregateInput = {
    clothing_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    image_url?: SortOrder
  }

  export type ClothingMinOrderByAggregateInput = {
    clothing_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    image_url?: SortOrder
  }

  export type ClothingSumOrderByAggregateInput = {
    clothing_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ClothingScalarRelationFilter = {
    is?: ClothingWhereInput
    isNot?: ClothingWhereInput
  }

  export type MythCountOrderByAggregateInput = {
    myth_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    clothing_id?: SortOrder
  }

  export type MythAvgOrderByAggregateInput = {
    myth_id?: SortOrder
    clothing_id?: SortOrder
  }

  export type MythMaxOrderByAggregateInput = {
    myth_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    clothing_id?: SortOrder
  }

  export type MythMinOrderByAggregateInput = {
    myth_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    clothing_id?: SortOrder
  }

  export type MythSumOrderByAggregateInput = {
    myth_id?: SortOrder
    clothing_id?: SortOrder
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

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    cart_id?: SortOrder
    customer_id?: SortOrder
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

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    clothing_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CartUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCustomerInput | CartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCustomerInput | CartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCustomerInput | CartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCustomerInput | CartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCustomerInput | CartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCustomerInput | CartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type MythCreateNestedManyWithoutClothingInput = {
    create?: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput> | MythCreateWithoutClothingInput[] | MythUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: MythCreateOrConnectWithoutClothingInput | MythCreateOrConnectWithoutClothingInput[]
    createMany?: MythCreateManyClothingInputEnvelope
    connect?: MythWhereUniqueInput | MythWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutClothingInput = {
    create?: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput> | CartItemCreateWithoutClothingInput[] | CartItemUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutClothingInput | CartItemCreateOrConnectWithoutClothingInput[]
    createMany?: CartItemCreateManyClothingInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type MythUncheckedCreateNestedManyWithoutClothingInput = {
    create?: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput> | MythCreateWithoutClothingInput[] | MythUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: MythCreateOrConnectWithoutClothingInput | MythCreateOrConnectWithoutClothingInput[]
    createMany?: MythCreateManyClothingInputEnvelope
    connect?: MythWhereUniqueInput | MythWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutClothingInput = {
    create?: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput> | CartItemCreateWithoutClothingInput[] | CartItemUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutClothingInput | CartItemCreateOrConnectWithoutClothingInput[]
    createMany?: CartItemCreateManyClothingInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MythUpdateManyWithoutClothingNestedInput = {
    create?: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput> | MythCreateWithoutClothingInput[] | MythUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: MythCreateOrConnectWithoutClothingInput | MythCreateOrConnectWithoutClothingInput[]
    upsert?: MythUpsertWithWhereUniqueWithoutClothingInput | MythUpsertWithWhereUniqueWithoutClothingInput[]
    createMany?: MythCreateManyClothingInputEnvelope
    set?: MythWhereUniqueInput | MythWhereUniqueInput[]
    disconnect?: MythWhereUniqueInput | MythWhereUniqueInput[]
    delete?: MythWhereUniqueInput | MythWhereUniqueInput[]
    connect?: MythWhereUniqueInput | MythWhereUniqueInput[]
    update?: MythUpdateWithWhereUniqueWithoutClothingInput | MythUpdateWithWhereUniqueWithoutClothingInput[]
    updateMany?: MythUpdateManyWithWhereWithoutClothingInput | MythUpdateManyWithWhereWithoutClothingInput[]
    deleteMany?: MythScalarWhereInput | MythScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutClothingNestedInput = {
    create?: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput> | CartItemCreateWithoutClothingInput[] | CartItemUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutClothingInput | CartItemCreateOrConnectWithoutClothingInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutClothingInput | CartItemUpsertWithWhereUniqueWithoutClothingInput[]
    createMany?: CartItemCreateManyClothingInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutClothingInput | CartItemUpdateWithWhereUniqueWithoutClothingInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutClothingInput | CartItemUpdateManyWithWhereWithoutClothingInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type MythUncheckedUpdateManyWithoutClothingNestedInput = {
    create?: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput> | MythCreateWithoutClothingInput[] | MythUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: MythCreateOrConnectWithoutClothingInput | MythCreateOrConnectWithoutClothingInput[]
    upsert?: MythUpsertWithWhereUniqueWithoutClothingInput | MythUpsertWithWhereUniqueWithoutClothingInput[]
    createMany?: MythCreateManyClothingInputEnvelope
    set?: MythWhereUniqueInput | MythWhereUniqueInput[]
    disconnect?: MythWhereUniqueInput | MythWhereUniqueInput[]
    delete?: MythWhereUniqueInput | MythWhereUniqueInput[]
    connect?: MythWhereUniqueInput | MythWhereUniqueInput[]
    update?: MythUpdateWithWhereUniqueWithoutClothingInput | MythUpdateWithWhereUniqueWithoutClothingInput[]
    updateMany?: MythUpdateManyWithWhereWithoutClothingInput | MythUpdateManyWithWhereWithoutClothingInput[]
    deleteMany?: MythScalarWhereInput | MythScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutClothingNestedInput = {
    create?: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput> | CartItemCreateWithoutClothingInput[] | CartItemUncheckedCreateWithoutClothingInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutClothingInput | CartItemCreateOrConnectWithoutClothingInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutClothingInput | CartItemUpsertWithWhereUniqueWithoutClothingInput[]
    createMany?: CartItemCreateManyClothingInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutClothingInput | CartItemUpdateWithWhereUniqueWithoutClothingInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutClothingInput | CartItemUpdateManyWithWhereWithoutClothingInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ClothingCreateNestedOneWithoutMythsInput = {
    create?: XOR<ClothingCreateWithoutMythsInput, ClothingUncheckedCreateWithoutMythsInput>
    connectOrCreate?: ClothingCreateOrConnectWithoutMythsInput
    connect?: ClothingWhereUniqueInput
  }

  export type ClothingUpdateOneRequiredWithoutMythsNestedInput = {
    create?: XOR<ClothingCreateWithoutMythsInput, ClothingUncheckedCreateWithoutMythsInput>
    connectOrCreate?: ClothingCreateOrConnectWithoutMythsInput
    upsert?: ClothingUpsertWithoutMythsInput
    connect?: ClothingWhereUniqueInput
    update?: XOR<XOR<ClothingUpdateToOneWithWhereWithoutMythsInput, ClothingUpdateWithoutMythsInput>, ClothingUncheckedUpdateWithoutMythsInput>
  }

  export type CustomerCreateNestedOneWithoutCartsInput = {
    create?: XOR<CustomerCreateWithoutCartsInput, CustomerUncheckedCreateWithoutCartsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCartsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<CustomerCreateWithoutCartsInput, CustomerUncheckedCreateWithoutCartsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCartsInput
    upsert?: CustomerUpsertWithoutCartsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCartsInput, CustomerUpdateWithoutCartsInput>, CustomerUncheckedUpdateWithoutCartsInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ClothingCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ClothingCreateWithoutCartItemsInput, ClothingUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ClothingCreateOrConnectWithoutCartItemsInput
    connect?: ClothingWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type ClothingUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ClothingCreateWithoutCartItemsInput, ClothingUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ClothingCreateOrConnectWithoutCartItemsInput
    upsert?: ClothingUpsertWithoutCartItemsInput
    connect?: ClothingWhereUniqueInput
    update?: XOR<XOR<ClothingUpdateToOneWithWhereWithoutCartItemsInput, ClothingUpdateWithoutCartItemsInput>, ClothingUncheckedUpdateWithoutCartItemsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type CartCreateWithoutCustomerInput = {
    created_at?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCustomerInput = {
    cart_id?: number
    created_at?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCustomerInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
  }

  export type CartCreateManyCustomerInputEnvelope = {
    data: CartCreateManyCustomerInput | CartCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CartUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
  }

  export type CartUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
  }

  export type CartUpdateManyWithWhereWithoutCustomerInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    cart_id?: IntFilter<"Cart"> | number
    customer_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
  }

  export type MythCreateWithoutClothingInput = {
    title: string
    content: string
  }

  export type MythUncheckedCreateWithoutClothingInput = {
    myth_id?: number
    title: string
    content: string
  }

  export type MythCreateOrConnectWithoutClothingInput = {
    where: MythWhereUniqueInput
    create: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput>
  }

  export type MythCreateManyClothingInputEnvelope = {
    data: MythCreateManyClothingInput | MythCreateManyClothingInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutClothingInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutClothingInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutClothingInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput>
  }

  export type CartItemCreateManyClothingInputEnvelope = {
    data: CartItemCreateManyClothingInput | CartItemCreateManyClothingInput[]
    skipDuplicates?: boolean
  }

  export type MythUpsertWithWhereUniqueWithoutClothingInput = {
    where: MythWhereUniqueInput
    update: XOR<MythUpdateWithoutClothingInput, MythUncheckedUpdateWithoutClothingInput>
    create: XOR<MythCreateWithoutClothingInput, MythUncheckedCreateWithoutClothingInput>
  }

  export type MythUpdateWithWhereUniqueWithoutClothingInput = {
    where: MythWhereUniqueInput
    data: XOR<MythUpdateWithoutClothingInput, MythUncheckedUpdateWithoutClothingInput>
  }

  export type MythUpdateManyWithWhereWithoutClothingInput = {
    where: MythScalarWhereInput
    data: XOR<MythUpdateManyMutationInput, MythUncheckedUpdateManyWithoutClothingInput>
  }

  export type MythScalarWhereInput = {
    AND?: MythScalarWhereInput | MythScalarWhereInput[]
    OR?: MythScalarWhereInput[]
    NOT?: MythScalarWhereInput | MythScalarWhereInput[]
    myth_id?: IntFilter<"Myth"> | number
    title?: StringFilter<"Myth"> | string
    content?: StringFilter<"Myth"> | string
    clothing_id?: IntFilter<"Myth"> | number
  }

  export type CartItemUpsertWithWhereUniqueWithoutClothingInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutClothingInput, CartItemUncheckedUpdateWithoutClothingInput>
    create: XOR<CartItemCreateWithoutClothingInput, CartItemUncheckedCreateWithoutClothingInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutClothingInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutClothingInput, CartItemUncheckedUpdateWithoutClothingInput>
  }

  export type CartItemUpdateManyWithWhereWithoutClothingInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutClothingInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    cart_item_id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    clothing_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
  }

  export type ClothingCreateWithoutMythsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    cartItems?: CartItemCreateNestedManyWithoutClothingInput
  }

  export type ClothingUncheckedCreateWithoutMythsInput = {
    clothing_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutClothingInput
  }

  export type ClothingCreateOrConnectWithoutMythsInput = {
    where: ClothingWhereUniqueInput
    create: XOR<ClothingCreateWithoutMythsInput, ClothingUncheckedCreateWithoutMythsInput>
  }

  export type ClothingUpsertWithoutMythsInput = {
    update: XOR<ClothingUpdateWithoutMythsInput, ClothingUncheckedUpdateWithoutMythsInput>
    create: XOR<ClothingCreateWithoutMythsInput, ClothingUncheckedCreateWithoutMythsInput>
    where?: ClothingWhereInput
  }

  export type ClothingUpdateToOneWithWhereWithoutMythsInput = {
    where?: ClothingWhereInput
    data: XOR<ClothingUpdateWithoutMythsInput, ClothingUncheckedUpdateWithoutMythsInput>
  }

  export type ClothingUpdateWithoutMythsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cartItems?: CartItemUpdateManyWithoutClothingNestedInput
  }

  export type ClothingUncheckedUpdateWithoutMythsInput = {
    clothing_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutClothingNestedInput
  }

  export type CustomerCreateWithoutCartsInput = {
    name: string
    email: string
    address?: string | null
    phone?: string | null
  }

  export type CustomerUncheckedCreateWithoutCartsInput = {
    customer_id?: number
    name: string
    email: string
    address?: string | null
    phone?: string | null
  }

  export type CustomerCreateOrConnectWithoutCartsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCartsInput, CustomerUncheckedCreateWithoutCartsInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity: number
    clothing: ClothingCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    cart_item_id?: number
    clothing_id: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutCartsInput = {
    update: XOR<CustomerUpdateWithoutCartsInput, CustomerUncheckedUpdateWithoutCartsInput>
    create: XOR<CustomerCreateWithoutCartsInput, CustomerUncheckedCreateWithoutCartsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCartsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCartsInput, CustomerUncheckedUpdateWithoutCartsInput>
  }

  export type CustomerUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutCartsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    created_at?: Date | string
    customer: CustomerCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    cart_id?: number
    customer_id: number
    created_at?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type ClothingCreateWithoutCartItemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    myths?: MythCreateNestedManyWithoutClothingInput
  }

  export type ClothingUncheckedCreateWithoutCartItemsInput = {
    clothing_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    image_url?: string | null
    myths?: MythUncheckedCreateNestedManyWithoutClothingInput
  }

  export type ClothingCreateOrConnectWithoutCartItemsInput = {
    where: ClothingWhereUniqueInput
    create: XOR<ClothingCreateWithoutCartItemsInput, ClothingUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingUpsertWithoutCartItemsInput = {
    update: XOR<ClothingUpdateWithoutCartItemsInput, ClothingUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ClothingCreateWithoutCartItemsInput, ClothingUncheckedCreateWithoutCartItemsInput>
    where?: ClothingWhereInput
  }

  export type ClothingUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ClothingWhereInput
    data: XOR<ClothingUpdateWithoutCartItemsInput, ClothingUncheckedUpdateWithoutCartItemsInput>
  }

  export type ClothingUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    myths?: MythUpdateManyWithoutClothingNestedInput
  }

  export type ClothingUncheckedUpdateWithoutCartItemsInput = {
    clothing_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    myths?: MythUncheckedUpdateManyWithoutClothingNestedInput
  }

  export type CartCreateManyCustomerInput = {
    cart_id?: number
    created_at?: Date | string
  }

  export type CartUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCustomerInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutCustomerInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MythCreateManyClothingInput = {
    myth_id?: number
    title: string
    content: string
  }

  export type CartItemCreateManyClothingInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
  }

  export type MythUpdateWithoutClothingInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MythUncheckedUpdateWithoutClothingInput = {
    myth_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MythUncheckedUpdateManyWithoutClothingInput = {
    myth_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemUpdateWithoutClothingInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutClothingInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutClothingInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyCartInput = {
    cart_item_id?: number
    clothing_id: number
    quantity: number
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    clothing?: ClothingUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    clothing_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    clothing_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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