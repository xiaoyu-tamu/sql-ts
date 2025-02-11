import { Knex } from 'knex'
import { ColumnDefinition, EnumBaseDefinition, TableDefinition } from './Adapters/AdapterInterface'

export type CaseType = 'pascal' | 'camel' | 'lower' | 'upper'

/**
 * The configuration file for creating new databases.
 * 
 * @export
 * @interface Config
 * @extends {knex.Config}
 */
export interface Config extends Knex.Config {
  tables?: string[],
  excludedTables?: string[],
  filename?: string,
  folder?: string,
  interfaceNameFormat?: string,
  tableNameCasing?: CaseType,
  columnNameCasing?: CaseType,
  enumNameCasing?: CaseType,
  enumKeyCasing?: CaseType
  singularTableNames?: boolean
  schemaAsNamespace?: boolean,
  schemas?: string[],
  template?: string,
  typeMap?: {
    [key: string]: string[]
  }
  typeOverrides?: { 
    [key: string]: string 
  },
  additionalProperties?: { 
    [key: string]: string []
  },
  extends?: { 
    [key: string]: string
  }
} 

/**
 * The JSON definition of a table with additional properties
 * 
 * @export
 * @interface Table
 */
export interface Table extends TableDefinition {
  interfaceName: string
  name: string,
  schema: string,
  columns: Column[]
  extends?: string
  additionalProperties?: string[],
}

/**
 * The JSON definition of a database.
 * 
 * @export
 * @interface Database
 */
export interface Database {
  tables: Table[]
  enums: Enum[]
}

/**
 * Enum value with original and converted keys.
 *
 * @export
 * @interface EnumValue
 */
export interface EnumValue {
  originalKey: string;
  convertedKey: string;
  value: string;
}

export interface Enum extends EnumBaseDefinition<EnumValue[]> {
  convertedName: string
}

/**
 * JSON definition of a database column with additional fields.
 *
 * @export
 * @interface Column
 */
export interface Column extends ColumnDefinition {
  propertyName: string
  propertyType: string
}
