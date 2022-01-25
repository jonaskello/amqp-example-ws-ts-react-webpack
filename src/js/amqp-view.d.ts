import { AMQPProperties, Field } from './amqp-properties.js';
/**
 * An extended DataView, with AMQP protocol specific methods.
 * Set methods returns bytes written.
 * Get methods returns the value read and how many bytes it used.
 * @ignore
 */
export default class AMQPView extends DataView {
    private static decoder;
    private static encoder;
    getUint64(byteOffset: number, littleEndian?: boolean): number;
    setUint64(byteOffset: number, value: number, littleEndian?: boolean): void;
    getInt64(byteOffset: number, littleEndian?: boolean): number;
    setInt64(byteOffset: number, value: number, littleEndian?: boolean): void;
    getShortString(byteOffset: number): [string, number];
    setShortString(byteOffset: number, string: string): number;
    getLongString(byteOffset: number, littleEndian?: boolean): [string, number];
    setLongString(byteOffset: number, string: string, littleEndian?: boolean): number;
    getProperties(byteOffset: number, littleEndian?: boolean): [AMQPProperties, number];
    setProperties(byteOffset: number, properties: AMQPProperties, littleEndian?: boolean): number;
    getTable(byteOffset: number, littleEndian?: boolean): [Record<string, Field>, number];
    setTable(byteOffset: number, table: Record<string, Field>, littleEndian?: boolean): number;
    getField(byteOffset: number, littleEndian?: boolean): [Field, number];
    setField(byteOffset: number, field: Field, littleEndian?: boolean): number;
    getArray(byteOffset: number, littleEndian?: boolean): [Field[], number];
    setArray(byteOffset: number, array: Field[], littleEndian?: boolean): number;
    getByteArray(byteOffset: number, littleEndian?: boolean): [Uint8Array, number];
    setByteArray(byteOffset: number, data: Uint8Array, littleEndian?: boolean): number;
}
//# sourceMappingURL=amqp-view.d.ts.map