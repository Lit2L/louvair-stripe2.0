-- CreateTable
CREATE TABLE "UserAddresses" (
    "id" VARCHAR(30) NOT NULL,
    "line1" VARCHAR(256),
    "line2" VARCHAR(256),
    "city" VARCHAR(256),
    "state" VARCHAR(256),
    "postal_code" VARCHAR(256),
    "country" VARCHAR(256),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAddresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carts" (
    "id" VARCHAR(30) NOT NULL,
    "payment_intent_id" VARCHAR(256),
    "client_secret" VARCHAR(256),
    "items" JSONB DEFAULT 'null',
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" VARCHAR(30) NOT NULL,
    "user_id" VARCHAR(36),
    "email" VARCHAR(256) NOT NULL,
    "token" VARCHAR(256) NOT NULL,
    "referred_by" VARCHAR(256),
    "newsletter" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" VARCHAR(30) NOT NULL,
    "store_id" VARCHAR(30) NOT NULL,
    "items" JSONB DEFAULT 'null',
    "quantity" INTEGER,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stripe_payment_intent_id" VARCHAR(256) NOT NULL,
    "stripe_payment_intent_status" VARCHAR(256) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "address_id" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" VARCHAR(30) NOT NULL,
    "store_id" VARCHAR(30) NOT NULL,
    "stripe_account_id" VARCHAR(256) NOT NULL,
    "stripe_account_created_at" INTEGER,
    "stripe_account_expires_at" INTEGER,
    "details_submitted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "description" TEXT,
    "images" JSONB DEFAULT 'null',
    "category_id" VARCHAR(30) NOT NULL,
    "subcategory_id" VARCHAR(30),
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "inventory" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "tags" JSONB DEFAULT 'null',
    "store_id" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscriptions" (
    "id" VARCHAR(30) NOT NULL,
    "user_id" VARCHAR(36) NOT NULL,
    "stripe_subscription_id" VARCHAR(256) NOT NULL,
    "stripe_price_id" VARCHAR(256) NOT NULL,
    "stripe_customer_id" VARCHAR(256) NOT NULL,
    "stripe_current_period_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_user_id_key" ON "Notifications"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_email_key" ON "Notifications"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_token_key" ON "Notifications"("token");

-- CreateIndex
CREATE INDEX "orders_store_id_idx" ON "Orders"("store_id");

-- CreateIndex
CREATE INDEX "orders_address_id_idx" ON "Orders"("address_id");

-- CreateIndex
CREATE INDEX "products_category_id_idx" ON "Products"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_user_id_key" ON "Subscriptions"("user_id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "UserAddresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
