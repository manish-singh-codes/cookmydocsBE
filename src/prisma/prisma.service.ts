import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks() {
        (this.$on as any )("beforeExit", async () => {
            await this.$disconnect();
        });
    }
}