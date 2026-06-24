export function getKstTime(): string {
    const kst = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);

    const yyyy = kst.getUTCFullYear();
    const MM = String(kst.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(kst.getUTCDate()).padStart(2, '0');
    const hh = String(kst.getUTCHours()).padStart(2, '0');
    const mi = String(kst.getUTCMinutes()).padStart(2, '0');
    const ss = String(kst.getUTCSeconds()).padStart(2, '0');

    return `${yyyy}-${MM}-${dd} ${hh}:${mi}:${ss}`;
}